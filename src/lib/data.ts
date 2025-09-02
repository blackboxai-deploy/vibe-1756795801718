import { Product, CategoryInfo } from './types';

export const products: Product[] = [
  // Sarees
  {
    id: '1',
    name: 'Banarasi Silk Saree',
    category: 'sarees',
    gender: 'women',
    price: 8500,
    originalPrice: 12000,
    images: [
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/787166d0-361f-46a4-88c6-62cab05c6882.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/bdcc96eb-5aea-4af2-8fb6-f8d21ee3dc05.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e9efd5ee-601d-45d3-8f0e-8276b0de8b42.png'
    ],
    description: 'Exquisite handwoven Banarasi silk saree with intricate golden zari work. Perfect for weddings and special occasions.',
    sizes: ['Free Size'],
    colors: ['Red', 'Maroon', 'Navy Blue', 'Green'],
    inStock: true,
    featured: true,
    rating: 4.8,
    reviews: 156,
    fabric: 'Pure Silk',
    occasion: ['Wedding', 'Festival', 'Ceremony']
  },
  {
    id: '2',
    name: 'Cotton Handloom Saree',
    category: 'sarees',
    gender: 'women',
    price: 2500,
    originalPrice: 3500,
    images: [
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a4032369-9278-41ec-9fc6-492e77d05544.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/efd21b89-bbde-4084-9b99-b80949f1115c.png'
    ],
    description: 'Comfortable cotton handloom saree with traditional block prints. Ideal for daily wear and office.',
    sizes: ['Free Size'],
    colors: ['Blue', 'Pink', 'Yellow', 'White'],
    inStock: true,
    featured: false,
    rating: 4.5,
    reviews: 89,
    fabric: 'Cotton',
    occasion: ['Daily Wear', 'Office', 'Casual']
  },

  // Lehengas
  {
    id: '3',
    name: 'Designer Bridal Lehenga',
    category: 'lehengas',
    gender: 'women',
    price: 15000,
    originalPrice: 22000,
    images: [
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ad0e3753-dc17-4aca-82dd-3c83da77267f.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e0796775-d6a9-4a4f-b4eb-dc5d2317b4bc.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/beda016b-d9ef-4ea3-a5c3-f73ef0a17976.png'
    ],
    description: 'Magnificent designer bridal lehenga with heavy embroidery, sequins, and stone work. Comes with matching dupatta.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Red', 'Pink', 'Maroon', 'Gold'],
    inStock: true,
    featured: true,
    rating: 4.9,
    reviews: 234,
    fabric: 'Silk & Net',
    occasion: ['Wedding', 'Reception', 'Engagement']
  },
  {
    id: '4',
    name: 'Party Wear Lehenga',
    category: 'lehengas',
    gender: 'women',
    price: 6500,
    originalPrice: 9000,
    images: [
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d9d9e049-e8f1-4348-99c6-2ab58f17cb36.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a40bc2f0-2f49-4d16-bd34-0f408c9a0bca.png'
    ],
    description: 'Trendy party wear lehenga with contemporary cut and elegant sequin work. Perfect for celebrations.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Navy', 'Emerald', 'Purple', 'Black'],
    inStock: true,
    featured: false,
    rating: 4.6,
    reviews: 78,
    fabric: 'Georgette',
    occasion: ['Party', 'Reception', 'Cocktail']
  },

  // Kurtas - Women
  {
    id: '5',
    name: 'Anarkali Cotton Kurta',
    category: 'kurtas',
    gender: 'women',
    price: 1800,
    originalPrice: 2500,
    images: [
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4593061b-4466-4b8d-8c0f-c56c92dd0377.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f8eb9597-6d31-4d1a-a0e0-24104257b22b.png'
    ],
    description: 'Comfortable Anarkali cotton kurta with beautiful floral prints. Perfect for daily wear and casual outings.',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Pink', 'Blue', 'Yellow', 'White', 'Green'],
    inStock: true,
    featured: true,
    rating: 4.4,
    reviews: 167,
    fabric: 'Cotton',
    occasion: ['Daily Wear', 'Casual', 'Office']
  },
  {
    id: '6',
    name: 'Silk Straight Kurta',
    category: 'kurtas',
    gender: 'women',
    price: 3200,
    originalPrice: 4200,
    images: [
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6781485c-1153-47d4-82c7-3bc5f69403f9.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9e393854-3978-41c8-9de0-061a177d13a3.png'
    ],
    description: 'Elegant silk straight kurta with intricate embroidered neckline. Ideal for festivals and formal occasions.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Cream', 'Pink', 'Blue', 'Orange'],
    inStock: true,
    featured: false,
    rating: 4.7,
    reviews: 92,
    fabric: 'Silk',
    occasion: ['Festival', 'Formal', 'Ceremony']
  },

  // Kurtas - Men
  {
    id: '7',
    name: 'Cotton Casual Kurta',
    category: 'kurtas',
    gender: 'men',
    price: 1500,
    originalPrice: 2000,
    images: [
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8fe61dca-8b84-4ca4-8da7-9bb8c53365b3.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/33c64901-971a-4f7d-8c0f-a69ccc419f57.png'
    ],
    description: 'Comfortable cotton kurta for men with traditional collar and button design. Perfect for daily wear.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White', 'Cream', 'Blue', 'Grey'],
    inStock: true,
    featured: false,
    rating: 4.3,
    reviews: 134,
    fabric: 'Cotton',
    occasion: ['Daily Wear', 'Casual', 'Office']
  },
  {
    id: '8',
    name: 'Linen Festive Kurta',
    category: 'kurtas',
    gender: 'men',
    price: 2800,
    originalPrice: 3500,
    images: [
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ed74e230-3a99-4a2b-85d9-a09d3255c61d.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a8f44c2b-1630-4f54-87ff-a89fedfaf74d.png'
    ],
    description: 'Premium linen kurta with mandarin collar. Breathable fabric perfect for festive occasions.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Beige', 'Navy', 'Maroon', 'Olive'],
    inStock: true,
    featured: true,
    rating: 4.6,
    reviews: 76,
    fabric: 'Linen',
    occasion: ['Festival', 'Casual', 'Party']
  },

  // Sherwanis
  {
    id: '9',
    name: 'Royal Wedding Sherwani',
    category: 'sherwanis',
    gender: 'men',
    price: 12000,
    originalPrice: 18000,
    images: [
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/bb3f48cf-62c1-41d6-af47-51cc50662539.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ea482956-f3d9-4db8-9ade-641c98c94c1f.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b911af86-4477-4509-8749-7dae66d5519c.png'
    ],
    description: 'Magnificent royal wedding sherwani with intricate golden embroidery. Comes with matching churidar and dupatta.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Cream', 'Gold', 'Maroon', 'Navy'],
    inStock: true,
    featured: true,
    rating: 4.8,
    reviews: 89,
    fabric: 'Silk Brocade',
    occasion: ['Wedding', 'Reception', 'Ceremony']
  },
  {
    id: '10',
    name: 'Designer Party Sherwani',
    category: 'sherwanis',
    gender: 'men',
    price: 7500,
    originalPrice: 10000,
    images: [
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/76ccc076-88a8-4c16-bfa6-89fee77ddad2.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f6a3892c-9a30-48da-a7b9-56096eaa12b9.png'
    ],
    description: 'Stylish designer sherwani with modern cut and subtle embellishments. Perfect for parties and celebrations.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Navy', 'Wine', 'Grey'],
    inStock: true,
    featured: false,
    rating: 4.5,
    reviews: 67,
    fabric: 'Silk',
    occasion: ['Party', 'Reception', 'Cocktail']
  },

  // Salwar Suits
  {
    id: '11',
    name: 'Punjabi Salwar Suit',
    category: 'salwar-suits',
    gender: 'women',
    price: 3500,
    originalPrice: 4500,
    images: [
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8dc4c1b2-94db-40ff-891f-a5061624a5a3.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/bc8e4171-995d-46ee-8bb3-af5923f87852.png'
    ],
    description: 'Traditional Punjabi salwar suit with authentic phulkari embroidery. Includes matching dupatta.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Pink', 'Red', 'Yellow', 'Green'],
    inStock: true,
    featured: false,
    rating: 4.6,
    reviews: 145,
    fabric: 'Cotton Silk',
    occasion: ['Festival', 'Wedding', 'Ceremony']
  },
  {
    id: '12',
    name: 'Designer Palazzo Suit',
    category: 'salwar-suits',
    gender: 'women',
    price: 4200,
    originalPrice: 5500,
    images: [
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/68ffacd9-3ee5-4a16-ae51-23b4062bbe80.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a6d7d2fa-af17-4108-94ee-b6d009294868.png'
    ],
    description: 'Modern designer palazzo suit with contemporary styling. Perfect for parties and modern occasions.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Navy', 'Black', 'Maroon', 'Teal'],
    inStock: true,
    featured: true,
    rating: 4.4,
    reviews: 98,
    fabric: 'Georgette',
    occasion: ['Party', 'Office', 'Casual']
  },

  // Kids Collection
  {
    id: '13',
    name: 'Boys Festive Kurta Set',
    category: 'kids',
    gender: 'kids',
    price: 1200,
    originalPrice: 1600,
    images: [
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/645db578-9bc4-4339-a502-2c0478647590.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4cba8ffa-ebe4-4f1e-b589-be14d027a508.png'
    ],
    description: 'Adorable boys festive kurta pajama set in soft cotton. Perfect for festivals and family functions.',
    sizes: ['2-3Y', '4-5Y', '6-7Y', '8-9Y', '10-11Y'],
    colors: ['Cream', 'Blue', 'Pink', 'Yellow'],
    inStock: true,
    featured: false,
    rating: 4.5,
    reviews: 67,
    fabric: 'Cotton',
    occasion: ['Festival', 'Wedding', 'Party']
  },
  {
    id: '14',
    name: 'Girls Lehenga Choli',
    category: 'kids',
    gender: 'kids',
    price: 1800,
    originalPrice: 2300,
    images: [
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/fed2f7bf-4064-44af-bfa9-8bf26986bcb1.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/fff144bd-72b9-4061-9382-55e6afccea71.png'
    ],
    description: 'Beautiful girls lehenga choli set with delicate embroidery. Includes matching dupatta.',
    sizes: ['2-3Y', '4-5Y', '6-7Y', '8-9Y', '10-11Y'],
    colors: ['Pink', 'Red', 'Purple', 'Green'],
    inStock: true,
    featured: true,
    rating: 4.7,
    reviews: 134,
    fabric: 'Silk',
    occasion: ['Wedding', 'Festival', 'Party']
  }
];

export const categories: CategoryInfo[] = [
  {
    id: 'sarees',
    name: 'Sarees',
    description: 'Traditional and contemporary sarees',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0a9be12f-f1e4-4da0-bd8e-50d45465b8cd.png',
    count: products.filter(p => p.category === 'sarees').length
  },
  {
    id: 'lehengas',
    name: 'Lehengas',
    description: 'Designer and bridal lehengas',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9a46b959-7d66-46f9-aedc-7033f2d91e6e.png',
    count: products.filter(p => p.category === 'lehengas').length
  },
  {
    id: 'kurtas',
    name: 'Kurtas',
    description: 'Comfortable kurtas for men and women',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b5e34e9b-512c-40a9-8c0b-9fc51765c4d4.png',
    count: products.filter(p => p.category === 'kurtas').length
  },
  {
    id: 'sherwanis',
    name: 'Sherwanis',
    description: 'Royal sherwanis for special occasions',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6d32bc60-6b52-489f-8abb-db912443044b.png',
    count: products.filter(p => p.category === 'sherwanis').length
  },
  {
    id: 'salwar-suits',
    name: 'Salwar Suits',
    description: 'Traditional and modern salwar suits',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/217e2e79-5f03-4b0a-9d00-70db5b4b0bc4.png',
    count: products.filter(p => p.category === 'salwar-suits').length
  },
  {
    id: 'kids',
    name: 'Kids Wear',
    description: 'Festive wear for children',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9f80891a-455d-487b-b0cb-09515cb8cc99.png',
    count: products.filter(p => p.category === 'kids').length
  }
];