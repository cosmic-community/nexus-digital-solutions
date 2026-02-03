'use client'

import { useState } from 'react'
import { BlogPost, BlogCategory } from '@/types'
import BlogCard from '@/components/BlogCard'

interface BlogListProps {
  posts: BlogPost[]
  categories: BlogCategory[]
}

export default function BlogList({ posts, categories }: BlogListProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const filteredPosts = selectedCategory
    ? posts.filter(post => {
        const postCategories = post.metadata?.post_categories
        if (!postCategories) return false
        const categoryArray = Array.isArray(postCategories) ? postCategories : [postCategories]
        return categoryArray.some(cat => cat?.id === selectedCategory || cat?.slug === selectedCategory)
      })
    : posts

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filter */}
        {categories && categories.length > 0 && (
          <div className="mb-12">
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
              Filter by Category
            </h2>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === null
                    ? 'gradient-bg text-white'
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-primary-600 hover:text-primary-600'
                }`}
              >
                All Posts
              </button>
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full font-medium transition-all ${
                    selectedCategory === category.id
                      ? 'gradient-bg text-white'
                      : 'bg-white text-gray-700 border border-gray-200 hover:border-primary-600 hover:text-primary-600'
                  }`}
                >
                  {category.metadata?.category_name || category.title}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Posts Grid */}
        {filteredPosts && filteredPosts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map(post => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              {selectedCategory ? 'No posts found in this category.' : 'No blog posts available yet.'}
            </p>
          </div>
        )}
      </div>
    </section>
  )
}