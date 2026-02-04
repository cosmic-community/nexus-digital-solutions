'use server'

import { Resend } from 'resend'

// Changed: Initialize Resend with API key from environment
const resend = new Resend(process.env.RESEND_API_KEY)

// Changed: Define the form state interface for type safety
export interface ContactFormState {
  success: boolean
  message: string
  errors?: {
    name?: string
    email?: string
    message?: string
  }
}

// Changed: Define the contact form data interface
interface ContactFormData {
  name: string
  email: string
  message: string
}

// Changed: Validate email format
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Changed: Server action to handle contact form submission
export async function submitContactForm(
  prevState: ContactFormState | null,
  formData: FormData
): Promise<ContactFormState> {
  // Extract form data
  const name = formData.get('name') as string | null
  const email = formData.get('email') as string | null
  const message = formData.get('message') as string | null

  // Validate required fields
  const errors: ContactFormState['errors'] = {}

  if (!name || name.trim().length === 0) {
    errors.name = 'Name is required'
  }

  if (!email || email.trim().length === 0) {
    errors.email = 'Email is required'
  } else if (!isValidEmail(email)) {
    errors.email = 'Please enter a valid email address'
  }

  if (!message || message.trim().length === 0) {
    errors.message = 'Message is required'
  }

  // Return validation errors if any
  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: 'Please fix the errors below',
      errors,
    }
  }

  // Type assertion after validation
  const validData: ContactFormData = {
    name: name!.trim(),
    email: email!.trim(),
    message: message!.trim(),
  }

  try {
    // Changed: Send email using Resend
    const { error } = await resend.emails.send({
      from: 'tony@cosmicjs.com',
      to: 'tony@cosmicjs.com',
      subject: `New Contact Form Submission from ${validData.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${validData.name}</p>
        <p><strong>Email:</strong> ${validData.email}</p>
        <p><strong>Message:</strong></p>
        <p>${validData.message.replace(/\n/g, '<br>')}</p>
      `,
      text: `
New Contact Form Submission

Name: ${validData.name}
Email: ${validData.email}
Message:
${validData.message}
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return {
        success: false,
        message: 'Failed to send message. Please try again later.',
      }
    }

    return {
      success: true,
      message: 'Thank you for your message! We will get back to you soon.',
    }
  } catch (error) {
    console.error('Contact form error:', error)
    return {
      success: false,
      message: 'An unexpected error occurred. Please try again later.',
    }
  }
}