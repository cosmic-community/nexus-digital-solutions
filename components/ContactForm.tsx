'use client'

import { useActionState } from 'react'
import { submitContactForm, ContactFormState } from '@/app/actions/contact'

// Changed: Contact form component with client-side interactivity
export default function ContactForm() {
  const initialState: ContactFormState = {
    success: false,
    message: '',
  }

  const [state, formAction, isPending] = useActionState(submitContactForm, initialState)

  return (
    <form action={formAction} className="space-y-6">
      {/* Changed: Display success or error message */}
      {state.message && (
        <div
          className={`p-4 rounded-lg ${
            state.success
              ? 'bg-green-50 text-green-800 border border-green-200'
              : 'bg-red-50 text-red-800 border border-red-200'
          }`}
        >
          {state.message}
        </div>
      )}

      {/* Changed: Name field */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className={`w-full px-4 py-3 rounded-lg border ${
            state.errors?.name ? 'border-red-500' : 'border-gray-300'
          } focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors`}
          placeholder="Your name"
          disabled={isPending}
        />
        {state.errors?.name && (
          <p className="mt-1 text-sm text-red-600">{state.errors.name}</p>
        )}
      </div>

      {/* Changed: Email field */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className={`w-full px-4 py-3 rounded-lg border ${
            state.errors?.email ? 'border-red-500' : 'border-gray-300'
          } focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors`}
          placeholder="your@email.com"
          disabled={isPending}
        />
        {state.errors?.email && (
          <p className="mt-1 text-sm text-red-600">{state.errors.email}</p>
        )}
      </div>

      {/* Changed: Message field */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={`w-full px-4 py-3 rounded-lg border ${
            state.errors?.message ? 'border-red-500' : 'border-gray-300'
          } focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none`}
          placeholder="How can we help you?"
          disabled={isPending}
        />
        {state.errors?.message && (
          <p className="mt-1 text-sm text-red-600">{state.errors.message}</p>
        )}
      </div>

      {/* Changed: Submit button with loading state */}
      <button
        type="submit"
        disabled={isPending}
        className="w-full gradient-bg text-white py-3 px-6 rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isPending ? (
          <>
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Sending...
          </>
        ) : (
          'Send Message'
        )}
      </button>
    </form>
  )
}