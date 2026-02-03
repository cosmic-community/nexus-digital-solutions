import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Nexus Digital Solutions',
  description: 'Read expert insights on web development, digital marketing, and cloud solutions. Stay updated with the latest trends in digital services.',
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}