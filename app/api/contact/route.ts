import { NextResponse } from 'next/server'
import { resend, EMAIL_CONFIG, emailTemplates } from '../../../lib/resend'
import { z } from 'zod'

/**
 * Contact form submission schema
 */
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().min(10, 'Phone number is required'),
  area: z.string().optional(),
  requirement: z.string().optional(),
  notes: z.string().optional(),
  email: z.string().email().optional(),
})

/**
 * POST /api/contact
 * Handles contact form submissions and sends emails via Resend
 */
export async function POST(request: Request) {
  try {
    const body = await request.json()
    const validatedData = contactSchema.parse(body)

    // If email is not configured (e.g. in local dev), don't block the user.
    if (!process.env.RESEND_API_KEY) {
      console.warn('RESEND_API_KEY is not set. Skipping email send but accepting contact form.')

      return NextResponse.json(
        {
          success: true,
          message: 'Thank you! We have received your details and will contact you shortly.',
        },
        { status: 200 },
      )
    }

    // Send email to admin (only if Resend client is available)
    let adminEmail = null
    if (resend) {
      try {
        adminEmail = await resend.emails.send({
          from: EMAIL_CONFIG.from,
          to: 'dudhpuke@gmail.com', // Send to actual admin email
          replyTo: validatedData.email || EMAIL_CONFIG.replyTo,
          ...emailTemplates.contactFormSubmission(validatedData),
        })

        // Check if Resend returned an error
        if (adminEmail.error) {
          console.error('Resend error:', adminEmail.error)
          throw new Error(adminEmail.error.message || 'Failed to send email via Resend')
        }
      } catch (emailError) {
        console.error('Email send error:', emailError)
        throw emailError
      }
    }

    // Send confirmation email to customer (if email provided)
    if (validatedData.email && resend) {
      try {
        const customerEmail = await resend.emails.send({
          from: EMAIL_CONFIG.from,
          to: validatedData.email,
          ...emailTemplates.contactFormConfirmation({ name: validatedData.name }),
        })

        if (customerEmail.error) {
          console.error('Resend customer email error:', customerEmail.error)
          // Don't throw - admin email is more important
        }
      } catch (emailError) {
        console.error('Customer email send error:', emailError)
        // Don't throw - admin email is more important
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you! We will contact you shortly.',
        emailId: adminEmail?.data?.id,
      },
      { status: 200 },
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid form data',
          errors: error.errors,
        },
        { status: 400 },
      )
    }

    console.error('Contact form error:', error)
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to send email. Please try again or contact us directly.',
      },
      { status: 500 },
    )
  }
}
