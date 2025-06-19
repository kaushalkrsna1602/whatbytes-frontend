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
    image: "https://images.pexels.com/photos/6686448/pexels-photo-6686448.jpeg",
    category: "Electronics",
    rating: 5,
    description: "High-quality wireless headphones with noise cancellation.",
  },
  {
    id: "3",
    title: "Backpack",
    price: 129,
    image: "https://images.pexels.com/photos/3731256/pexels-photo-3731256.jpeg",
    category: "Clothing",
    rating: 4,
    description: "Durable backpack for everyday use.",
  },
  {
    id: "4",
    title: "Smartwatch",
    price: 249,
    image: "https://images.pexels.com/photos/2861929/pexels-photo-2861929.jpeg",
    category: "Electronics",
    rating: 5,
    description: "Smartwatch with fitness tracking features.",
  },
  {
    id: "5",
    title: "Sunglasses",
    price: 149,
    image: "https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg",
    category: "Clothing",
    rating: 4,
    description: "Stylish sunglasses with UV protection.",
  },
  {
    id: "6",
    title: "Digital Camera",
    price: 499,
    image: "https://images.pexels.com/photos/593324/pexels-photo-593324.jpeg",
    category: "Electronics",
    rating: 4,
    description: "High-resolution digital camera.",
  },
  {
    id: "7",
    title: "T-shirt",
    price: 29,
    image: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg",
    category: "Clothing",
    rating: 3,
    description: "Comfortable cotton t-shirt.",
  },
  {
    id: "8",
    title: "Smartphone",
    price: 699,
    image: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg",
    category: "Electronics",
    rating: 5,
    description: "Latest model smartphone with advanced features.",
  },
];
