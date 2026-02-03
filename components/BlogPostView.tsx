import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import { BlogPost } from '@/types'

interface BlogPostViewProps {
  post: BlogPost
}

export default function BlogPostView({ post }: BlogPostViewProps) {
  const title = post.metadata?.post_title || post.title
  const content = post.metadata?.post_content || ''
  const readTime = post.metadata?.read_time || 5
  const author = post.metadata?.post_author
  const categories = post.metadata?.post_categories
  const featuredImage = post.metadata?.featured_image

  const categoryArray = Array.isArray(categories) ? categories : categories ? [categories] : []

  return (
    <article className="py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link href="/blog" className="text-primary-600 hover:text-primary-700 font-medium">
            ← Back to Blog
          </Link>
        </div>

        {/* Meta Info */}
        <div className="mb-8 pb-8 border-b border-gray-200">
          <div className="flex flex-wrap gap-2 mb-4">
            {categoryArray && categoryArray.length > 0 && categoryArray.map(category => (
              <span
                key={category?.id}
                className="text-sm font-semibold text-primary-600 bg-primary-50 px-3 py-1 rounded-full"
              >
                {category?.metadata?.category_name || category?.title}
              </span>
            ))}
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-gray-600">
            {author && (
              <div className="flex items-center gap-3">
                {author.metadata?.profile_photo && (
                  <img
                    src={`${author.metadata.profile_photo.imgix_url}?w=48&h=48&fit=crop&auto=format,compress`}
                    alt={author.metadata?.author_name || author.title}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                )}
                <div>
                  <div className="font-medium text-gray-900">
                    {author.metadata?.author_name || author.title}
                  </div>
                  {author.metadata?.bio && (
                    <div className="text-sm text-gray-600">
                      {author.metadata.bio}
                    </div>
                  )}
                </div>
              </div>
            )}
            <span>•</span>
            <span>{readTime} min read</span>
          </div>
        </div>

        {/* Featured Image */}
        {featuredImage && (
          <div className="mb-12 rounded-2xl overflow-hidden">
            <img
              src={`${featuredImage.imgix_url}?w=1200&h=600&fit=crop&auto=format,compress`}
              alt={title}
              width={1200}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        {/* Content */}
        <div className="prose prose-lg max-w-none mb-16">
          {content && (
            <ReactMarkdown
              components={{
                h2: ({ children }) => (
                  <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">{children}</h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-3">{children}</h3>
                ),
                p: ({ children }) => (
                  <p className="text-gray-700 mb-4 leading-relaxed">{children}</p>
                ),
                ul: ({ children }) => (
                  <ul className="space-y-2 mb-4 ml-6 list-disc">{children}</ul>
                ),
                ol: ({ children }) => (
                  <ol className="space-y-2 mb-4 ml-6 list-decimal">{children}</ol>
                ),
                li: ({ children }) => (
                  <li className="text-gray-700">{children}</li>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-primary-600 pl-4 italic text-gray-700 my-6">
                    {children}
                  </blockquote>
                ),
                a: ({ href, children }) => (
                  <a href={href} className="text-primary-600 hover:text-primary-700 underline">
                    {children}
                  </a>
                ),
                strong: ({ children }) => (
                  <strong className="font-semibold text-gray-900">{children}</strong>
                ),
                code: ({ children }) => (
                  <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-gray-800">
                    {children}
                  </code>
                ),
              }}
            >
              {content}
            </ReactMarkdown>
          )}
        </div>

        {/* Author Bio */}
        {author && author.metadata?.bio && (
          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <h3 className="text-xl font-bold text-gray-900 mb-4">About the Author</h3>
            <div className="flex gap-6 items-start">
              {author.metadata?.profile_photo && (
                <img
                  src={`${author.metadata.profile_photo.imgix_url}?w=120&h=120&fit=crop&auto=format,compress`}
                  alt={author.metadata?.author_name || author.title}
                  width={120}
                  height={120}
                  className="w-24 h-24 rounded-full object-cover flex-shrink-0"
                />
              )}
              <div className="flex-grow">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {author.metadata?.author_name || author.title}
                </h4>
                <p className="text-gray-700 mb-4">
                  {author.metadata?.bio}
                </p>
                <div className="flex gap-4">
                  {author.metadata?.email && (
                    <a
                      href={`mailto:${author.metadata.email}`}
                      className="text-primary-600 hover:text-primary-700 font-medium"
                    >
                      Email
                    </a>
                  )}
                  {author.metadata?.linkedin_url && (
                    <a
                      href={author.metadata.linkedin_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-700 font-medium"
                    >
                      LinkedIn
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Related Posts CTA */}
        <div className="text-center py-12 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Explore More Articles</h3>
          <p className="text-gray-600 mb-6">
            Discover more insights about digital services and web solutions.
          </p>
          <Link
            href="/blog"
            className="inline-block gradient-bg text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            View All Posts
          </Link>
        </div>
      </div>
    </article>
  )
}