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
    image: "/running-shoes.jpg",
    category: "Clothing",
    rating: 4,
    description: "Comfortable running shoes for everyday use.",
  },
  {
    id: "2",
    title: "Wireless Headphones",
    price: 199,
    image: "/wireless-headphones.jpg",
    category: "Electronics",
    rating: 5,
    description: "High-quality wireless headphones with noise cancellation.",
  },
  // ...add more products as needed
];
