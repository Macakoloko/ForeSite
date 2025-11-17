
export interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
}

export interface Project {
  id: number;
  category: string;
  title: string;
  imageUrl: string;
  videoUrl?: string;
  galleryUrls?: string[];
  size?: 'normal' | 'large';
}

export interface Service {
  name: string;
  price: string;
  description: string;
  isMonthly?: boolean;
}

export interface Testimonial {
  quote: string;
  author: string;
  company: string;
}