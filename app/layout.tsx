import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CosmicBadge from '@/components/CosmicBadge'

export const metadata: Metadata = {
  title: 'Nexus Digital Solutions | Web Development, Marketing & Cloud Services',
  description: 'Transform your business with our expert web development, digital marketing, and cloud solutions. We deliver results that drive growth.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const bucketSlug = process.env.COSMIC_BUCKET_SLUG as string
  
  return (
    <html lang="en">
      <head>
        {/* Changed: Added async attribute to prevent hydration issues */}
        <script src="/dashboard-console-capture.js" async />
      </head>
      <body className="bg-white text-gray-900">
        <Header />
        <main>{children}</main>
        <Footer />
        <CosmicBadge bucketSlug={bucketSlug} />
      </body>
    </html>
  )
}