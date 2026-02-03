export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  metadata: Record<string, unknown>;
  type: string;
}

export interface ImageField {
  url: string;
  imgix_url: string;
}

export interface Service extends CosmicObject {
  type: 'services';
  metadata: {
    title?: string;
    description?: string;
    icon?: ImageField;
    features?: string;
  };
}

export interface TeamMember extends CosmicObject {
  type: 'team-members';
  metadata: {
    name?: string;
    role?: string;
    bio?: string;
    photo?: ImageField;
    email?: string;
    linkedin?: string;
  };
}

export interface Testimonial extends CosmicObject {
  type: 'testimonials';
  metadata: {
    client_name?: string;
    company?: string;
    quote?: string;
    photo?: ImageField;
    rating?: number;
  };
}

// Changed: Added blog-related interfaces
export interface BlogAuthor extends CosmicObject {
  type: 'blog-authors';
  metadata: {
    author_name?: string;
    email?: string;
    bio?: string;
    profile_photo?: ImageField;
    linkedin_url?: string;
  };
}

export interface BlogCategory extends CosmicObject {
  type: 'blog-categories';
  metadata: {
    category_name?: string;
    description?: string;
    category_icon?: ImageField;
  };
}

export interface BlogPost extends CosmicObject {
  type: 'blog-posts';
  metadata: {
    post_title?: string;
    meta_description?: string;
    keywords?: string;
    featured_image?: ImageField;
    post_content?: string;
    post_author?: BlogAuthor;
    post_categories?: BlogCategory[];
    read_time?: number;
    status?: string;
  };
  created_at?: string;
}