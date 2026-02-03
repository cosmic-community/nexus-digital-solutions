import { createBucketClient } from '@cosmicjs/sdk'
import { Service, TeamMember, Testimonial, BlogPost, BlogAuthor, BlogCategory } from '@/types'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
  apiEnvironment: 'staging',
})

function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error
}

export async function getServices(): Promise<Service[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'services' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects as Service[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch services')
  }
}

export async function getTeamMembers(): Promise<TeamMember[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'team-members' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects as TeamMember[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch team members')
  }
}

export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'testimonials' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects as Testimonial[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch testimonials')
  }
}

// Changed: Added blog-related queries
export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'blog-posts', 'metadata.status': 'Published' })
      .props(['id', 'title', 'slug', 'metadata', 'created_at'])
      .depth(1)
    
    return (response.objects as BlogPost[]).sort((a, b) => {
      const dateA = new Date(a.created_at || '').getTime()
      const dateB = new Date(b.created_at || '').getTime()
      return dateB - dateA
    })
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch blog posts')
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'blog-posts', slug })
      .props(['id', 'title', 'slug', 'metadata', 'created_at'])
      .depth(1)
    
    return response.object as BlogPost
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw new Error('Failed to fetch blog post')
  }
}

export async function getBlogCategories(): Promise<BlogCategory[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'blog-categories' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects as BlogCategory[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch blog categories')
  }
}

export async function getBlogPostsByCategory(categoryId: string): Promise<BlogPost[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'blog-posts', 'metadata.post_categories': categoryId, 'metadata.status': 'Published' })
      .props(['id', 'title', 'slug', 'metadata', 'created_at'])
      .depth(1)
    
    return (response.objects as BlogPost[]).sort((a, b) => {
      const dateA = new Date(a.created_at || '').getTime()
      const dateB = new Date(b.created_at || '').getTime()
      return dateB - dateA
    })
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch posts by category')
  }
}