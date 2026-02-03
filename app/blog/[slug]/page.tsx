// app/blog/[slug]/page.tsx
import { notFound } from 'next/navigation'
import BlogPostView from '@/components/BlogPostView'
import { getBlogPostBySlug } from '@/lib/cosmic'

interface Props {
  params: Promise<{ slug: string }>
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return <BlogPostView post={post} />
}