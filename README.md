# Nexus Digital Solutions

![Nexus Digital Solutions](https://imgix.cosmicjs.com/e6e33f60-00b1-11f1-bc31-2f0ace4efed3-photo-1461749280684-dccba630e2f6-1770089950298.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A professional company website built with Next.js 16 and Cosmic CMS, featuring dynamic services, team member profiles, and client testimonials.

## Features

- 🚀 **Next.js 16** with App Router and Server Components
- 💼 **Services Showcase** with Markdown-rendered feature lists
- 👥 **Team Members** with professional profiles and social links
- ⭐ **Client Testimonials** with ratings and company information
- 🎨 **Modern Design** with Tailwind CSS and smooth animations
- 📱 **Fully Responsive** across all device sizes
- 🔍 **SEO Optimized** with server-side rendering
- ⚡ **Fast Performance** with optimized images via imgix

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](http://localhost:3040/projects/new?clone_bucket=69816d85f078ef3755fe48da&clone_repository=69816eb0f078ef3755fe48fd)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create a complete content model for: A company website with services, team members, and testimonials
>
> Use the install_content_model action to create ALL object types AND demo content in one step. Include:
> 1. All necessary object types with appropriate metafields
> 2. 2-3 demo objects for each type with realistic content
> 3. Unsplash image URLs for thumbnails and file metafields (use real URLs like https://images.unsplash.com/photo-...)
>
> Remember to create types that are referenced by others FIRST (e.g., categories and authors before blog posts)."

### Code Generation Prompt

> "Next.js A company website with services, team members, and testimonials"

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies

- [Next.js 16](https://nextjs.org/) - React framework with App Router
- [Cosmic](https://www.cosmicjs.com/) - Headless CMS for content management
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [React Markdown](https://github.com/remarkjs/react-markdown) - Markdown rendering

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- Bun (recommended) or npm
- A Cosmic account with the company website content model

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd nexus-digital-solutions
```

2. Install dependencies:
```bash
bun install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Add your Cosmic credentials to `.env.local`:
```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

5. Run the development server:
```bash
bun dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Cosmic SDK Examples

### Fetching Services
```typescript
import { cosmic } from '@/lib/cosmic'

const { objects: services } = await cosmic.objects
  .find({ type: 'services' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching Team Members
```typescript
const { objects: team } = await cosmic.objects
  .find({ type: 'team-members' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching Testimonials
```typescript
const { objects: testimonials } = await cosmic.objects
  .find({ type: 'testimonials' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

## Cosmic CMS Integration

This website is powered by [Cosmic](https://www.cosmicjs.com/), a headless CMS that makes it easy to manage your content. The content model includes:

### Services
- **Title** (text) - Service name
- **Description** (textarea) - Brief description
- **Icon** (file) - Service image
- **Features** (markdown) - Detailed feature list

### Team Members
- **Name** (text) - Full name
- **Role** (text) - Job title
- **Bio** (textarea) - Short biography
- **Photo** (file) - Profile photo
- **Email** (text) - Contact email
- **LinkedIn** (text) - LinkedIn URL

### Testimonials
- **Client Name** (text) - Customer name
- **Company** (text) - Client's company
- **Quote** (textarea) - Testimonial text
- **Photo** (file) - Client photo
- **Rating** (number) - Star rating (1-5)

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com/)
3. Add environment variables in the Vercel dashboard
4. Deploy!

### Netlify

1. Push your code to GitHub
2. Import the project in [Netlify](https://netlify.com/)
3. Add environment variables in site settings
4. Deploy!

## License

MIT License - feel free to use this template for your projects.

<!-- README_END -->