export interface Product {
  id: string;
  name: string;
  category: 'sarees' | 'lehengas' | 'kurtas' | 'sherwanis' | 'salwar-suits' | 'kids';
  gender: 'women' | 'men' | 'kids';
  price: number;
  originalPrice?: number;
  images: string[];
  description: string;
  sizes: string[];
  colors: string[];
  inStock: boolean;
  featured: boolean;
  rating: number;
  reviews: number;
  fabric: string;
  occasion: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize: string;
  selectedColor: string;
}

export interface Cart {
  items: CartItem[];
  total: number;
  itemCount: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  address?: {
    street: string;
    city: string;
    state: string;
    pincode: string;
  };
}

export interface FilterOptions {
  category: string[];
  priceRange: [number, number];
  sizes: string[];
  colors: string[];
  gender: string[];
}

export type CategoryType = 'all' | 'sarees' | 'lehengas' | 'kurtas' | 'sherwanis' | 'salwar-suits' | 'kids';

export interface CategoryInfo {
  id: CategoryType;
  name: string;
  description: string;
  image: string;
  count: number;
}