import { NextResponse } from 'next/server'
import { resend, EMAIL_CONFIG, emailTemplates } from '../../../lib/resend'
import { z } from 'zod'

/**
 * Subscription inquiry schema
 */
const subscriptionSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().min(10, 'Phone number is required'),
  email: z.string().email().optional(),
  plan: z.enum(['daily', 'monthly', 'custom']),
  quantity: z.string().optional(),
})

/**
 * POST /api/subscription-inquiry
 * Handles subscription inquiries and sends emails via Resend
 */
export async function POST(request: Request) {
  try {
    const body = await request.json()
    const validatedData = subscriptionSchema.parse(body)

    // If email is not configured (e.g. in local dev), don't block the user.
    if (!process.env.RESEND_API_KEY) {
      console.warn('RESEND_API_KEY is not set. Skipping email send but accepting subscription inquiry.')

      return NextResponse.json(
        {
          success: true,
          message:
            'Thank you for your interest! We have received your inquiry and will contact you shortly to set up your subscription.',
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
          ...emailTemplates.subscriptionInquiry(validatedData),
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
        message: 'Thank you for your interest! We will contact you shortly to set up your subscription.',
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

    console.error('Subscription inquiry error:', error)
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to send inquiry. Please try again or contact us directly.',
      },
      { status: 500 },
    )
  }
}
