import { Resend } from 'resend'

/**
 * Resend email client
 *
 * In local/dev without RESEND_API_KEY, this will be null so that routes can
 * gracefully skip sending real emails instead of throwing at import time.
 */
export const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null

/**
 * Default email configuration
 * 
 * For testing: Use Resend's default sender (onboarding@resend.dev)
 * For production: Verify your domain in Resend and use: 'Dudhpuke <no-reply@yourdomain.com>'
 */
export const EMAIL_CONFIG = {
  from: process.env.RESEND_FROM_EMAIL || 'Dudhpuke <onboarding@resend.dev>', // Resend's default test sender
  replyTo: process.env.ADMIN_EMAIL || 'dudhpuke@gmail.com',
}

/**
 * Email templates for common use cases
 */
export const emailTemplates = {
  /**
   * Contact form submission email (to admin)
   */
  contactFormSubmission: (data: {
    name: string
    phone: string
    area?: string
    requirement?: string
    notes?: string
  }) => ({
    subject: `New Contact Form Submission from ${data.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2F6F4E;">New Contact Form Submission</h2>
        <p>You have received a new contact form submission from the Dudhpuke website:</p>
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Name:</td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${data.name}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Phone:</td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${data.phone}</td>
          </tr>
          ${data.area ? `
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Area:</td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${data.area}</td>
          </tr>
          ` : ''}
          ${data.requirement ? `
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Daily Dairy Requirement:</td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${data.requirement}</td>
          </tr>
          ` : ''}
          ${data.notes ? `
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Notes:</td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${data.notes}</td>
          </tr>
          ` : ''}
        </table>
        <p style="margin-top: 20px; color: #666; font-size: 14px;">
          Please follow up with this customer via phone or WhatsApp to confirm their subscription.
        </p>
      </div>
    `,
  }),

  /**
   * Contact form confirmation email (to customer)
   */
  contactFormConfirmation: (data: { name: string }) => ({
    subject: 'Thank you for contacting Dudhpuke',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2F6F4E;">Thank you, ${data.name}!</h2>
        <p>We have received your subscription inquiry and will contact you shortly to confirm your Dudhpuke dairy product delivery.</p>
        <p>Our team typically responds within delivery hours. You can also reach us directly:</p>
        <ul style="list-style: none; padding: 0;">
          <li style="margin: 10px 0;">📞 Phone: +977-9763514556</li>
          <li style="margin: 10px 0;">💬 WhatsApp: +9779806343974</li>
        </ul>
        <p style="margin-top: 30px; color: #666; font-size: 14px;">
          Best regards,<br>
          <strong>The Dudhpuke Team</strong><br>
          Om Sai Pashu Palan
        </p>
      </div>
    `,
  }),

  /**
   * Subscription inquiry email (to admin)
   */
  subscriptionInquiry: (data: {
    name: string
    email?: string
    phone: string
    plan: string
    quantity?: string
  }) => ({
    subject: `New Subscription Inquiry: ${data.plan}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2F6F4E;">New Subscription Inquiry</h2>
        <p>A customer has expressed interest in a Dudhpuke subscription:</p>
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Name:</td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${data.name}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Phone:</td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${data.phone}</td>
          </tr>
          ${data.email ? `
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${data.email}</td>
          </tr>
          ` : ''}
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Plan:</td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${data.plan}</td>
          </tr>
          ${data.quantity ? `
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Quantity:</td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${data.quantity}</td>
          </tr>
          ` : ''}
        </table>
        <p style="margin-top: 20px; color: #666; font-size: 14px;">
          Please follow up with this customer to complete their subscription setup.
        </p>
      </div>
    `,
  }),
}
