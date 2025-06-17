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
  {
    id: "3",
    title: "Backpack",
    price: 129,
    image: "/backpack.jpg",
    category: "Clothing",
    rating: 4,
    description: "Durable backpack for everyday use.",
  },
  {
    id: "4",
    title: "Smartwatch",
    price: 249,
    image: "/smartwatch.jpg",
    category: "Electronics",
    rating: 5,
    description: "Smartwatch with fitness tracking features.",
  },
  {
    id: "5",
    title: "Sunglasses",
    price: 149,
    image: "/sunglasses.jpg",
    category: "Clothing",
    rating: 4,
    description: "Stylish sunglasses with UV protection.",
  },
  {
    id: "6",
    title: "Digital Camera",
    price: 499,
    image: "/digital-camera.jpg",
    category: "Electronics",
    rating: 4,
    description: "High-resolution digital camera.",
  },
  {
    id: "7",
    title: "T-shirt",
    price: 29,
    image: "/tshirt.jpg",
    category: "Clothing",
    rating: 3,
    description: "Comfortable cotton t-shirt.",
  },
  {
    id: "8",
    title: "Smartphone",
    price: 699,
    image: "/smartphone.jpg",
    category: "Electronics",
    rating: 5,
    description: "Latest model smartphone with advanced features.",
  },
]; 