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