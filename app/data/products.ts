export type Product = {
  id: string;
  title: string;
  price: number;
  image: string;
  category: string;
  rating?: number;
  description?: string;
};

export const products: Product[] = [
  {
    id: "1",
    title: "Running Shoes",
    price: 99,
    image: "https://images.pexels.com/photos/1599005/pexels-photo-1599005.jpeg",
    category: "Clothing",
    rating: 4,
    description: "Comfortable running shoes for everyday use.",
  },
  {
    id: "2",
    title: "Wireless Headphones",
    price: 199,
    image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=800&q=80",
    category: "Electronics",
    rating: 5,
    description: "High-quality wireless headphones with noise cancellation.",
  },
  {
    id: "3",
    title: "Backpack",
    price: 129,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    category: "Clothing",
    rating: 4,
    description: "Durable backpack for everyday use.",
  },
  {
    id: "4",
    title: "Smartwatch",
    price: 249,
    image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=800&q=80",
    category: "Electronics",
    rating: 5,
    description: "Smartwatch with fitness tracking features.",
  },
  {
    id: "5",
    title: "Sunglasses",
    price: 149,
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80",
    category: "Clothing",
    rating: 4,
    description: "Stylish sunglasses with UV protection.",
  },
  {
    id: "6",
    title: "Digital Camera",
    price: 499,
    image: "https://images.unsplash.com/photo-1519183071298-a2962cc0a5a9?auto=format&fit=crop&w=800&q=80",
    category: "Electronics",
    rating: 4,
    description: "High-resolution digital camera.",
  },
  {
    id: "7",
    title: "T-shirt",
    price: 29,
    image: "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=800&q=80",
    category: "Clothing",
    rating: 3,
    description: "Comfortable cotton t-shirt.",
  },
  {
    id: "8",
    title: "Smartphone",
    price: 699,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
    category: "Electronics",
    rating: 5,
    description: "Latest model smartphone with advanced features.",
  },
];
