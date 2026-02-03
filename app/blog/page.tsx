import BlogList from '@/components/BlogList'
import BlogHero from '@/components/BlogHero'
import { getBlogPosts, getBlogCategories } from '@/lib/cosmic'

export default async function BlogPage() {
  const [posts, categories] = await Promise.all([
    getBlogPosts(),
    getBlogCategories(),
  ])

  return (
    <>
      <BlogHero />
      <BlogList posts={posts} categories={categories} />
    </>
  )
}