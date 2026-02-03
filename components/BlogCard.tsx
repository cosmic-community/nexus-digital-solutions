import Link from 'next/link'
import { BlogPost, BlogCategory } from '@/types'

interface BlogCardProps {
  post: BlogPost
}

export default function BlogCard({ post }: BlogCardProps) {
  const title = post.metadata?.post_title || post.title
  const description = post.metadata?.meta_description || ''
  const readTime = post.metadata?.read_time || 5
  const author = post.metadata?.post_author
  const categories = post.metadata?.post_categories
  const featuredImage = post.metadata?.featured_image

  const categoryArray = Array.isArray(categories) ? categories : categories ? [categories] : []

  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group flex flex-col h-full">
      {/* Featured Image */}
      {featuredImage && (
        <div className="aspect-video overflow-hidden bg-gray-200">
          <img
            src={`${featuredImage.imgix_url}?w=600&h=400&fit=crop&auto=format,compress`}
            alt={title}
            width={600}
            height={400}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Categories */}
        {categoryArray && categoryArray.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {categoryArray.map(category => (
              <Link
                key={category?.id}
                href={`/blog?category=${category?.slug}`}
                className="text-xs font-semibold text-primary-600 bg-primary-50 px-3 py-1 rounded-full hover:bg-primary-100 transition-colors"
              >
                {(category as BlogCategory)?.metadata?.category_name || (category as BlogCategory)?.title}
              </Link>
            ))}
          </div>
        )}

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
          <Link href={`/blog/${post.slug}`}>
            {title}
          </Link>
        </h3>

        {/* Description */}
        {description && (
          <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
            {description}
          </p>
        )}

        {/* Meta Info */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            {author && (
              <>
                <span className="font-medium text-gray-700">
                  {(author as BlogPost['metadata']['post_author'])?.metadata?.author_name || author.title}
                </span>
                <span>•</span>
              </>
            )}
            <span>{readTime} min read</span>
          </div>
        </div>

        {/* CTA */}
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center mt-4 text-primary-600 font-semibold hover:text-primary-700 group/link"
        >
          Read More
          <svg className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  )
}