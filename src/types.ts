export interface Service {
  id: string;
  title: string;
  description: string;
  price: number;
  icon: string;
  enabled: boolean;
}

export interface Remedy {
  id: string;
  title: string;
  category: 'love' | 'career' | 'finance' | 'health';
  description: string;
  icon: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  price: number;
  whatsappLink: string;
}

export interface Ebook {
  id: string;
  title: string;
  description: string;
  price: number;
  buyLink: string;
}

export interface Booking {
  id: string;
  name: string;
  dob: string;
  question: string;
  whatsappNumber: string;
  serviceId: string;
  status: 'pending' | 'confirmed' | 'completed';
  createdAt: number;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
  avatar?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  image?: string;
  date: number;
}

export interface SiteSettings {
  logoUrl: string;
  siteTitle: string;
  siteDescription: string;
  upiId: string;
  upiQrCodeUrl: string;
  whatsappNumber: string;
}
