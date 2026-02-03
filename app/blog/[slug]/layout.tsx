// app/blog/[slug]/layout.tsx
import { Metadata } from 'next'
import { getBlogPostBySlug } from '@/lib/cosmic'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The blog post you are looking for does not exist.',
    }
  }

  const metaDescription = post.metadata?.meta_description || post.metadata?.post_title || ''
  const keywords = post.metadata?.keywords || ''

  return {
    title: `${post.metadata?.post_title} | Blog | Nexus Digital Solutions`,
    description: metaDescription,
    keywords,
    openGraph: {
      title: post.metadata?.post_title,
      description: metaDescription,
      type: 'article',
      url: `https://nexus-digital.com/blog/${slug}`,
      images: post.metadata?.featured_image?.url ? [
        {
          url: post.metadata.featured_image.url,
          width: 1200,
          height: 630,
        }
      ] : [],
    },
  }
}

export default function PostLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}