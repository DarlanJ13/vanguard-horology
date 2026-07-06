export interface Product {
  id: string;
  brand: string;
  brandSlug: string;
  model: string;
  reference: string;
  collection: string;
  price: number;
  image: string;
  description: string;
  specs: {
    case: string;
    movement: string;
    waterResistance?: string;
    functions?: string;
  };
  featured?: boolean;
  new?: boolean;
  related?: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  since: string;
}

export interface InstagramPost {
  id: string;
  image: string;
  alt: string;
  href: string;
}
