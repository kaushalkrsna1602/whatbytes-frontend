"use client";

import React from "react";
import { Star } from "lucide-react";
import { useCartStore } from "../context/cartStore";
import { Product } from "../data/products";
import { useRouter } from "next/navigation";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const addToCart = useCartStore((state) => state.addToCart);
  const router = useRouter();

  const handleCardClick = (e: React.MouseEvent) => {
    // Prevent navigation if Add to Cart button is clicked
    if ((e.target as HTMLElement).closest("button[data-add-to-cart]") !== null) {
      return;
    }
    router.push(`/product/${product.id}`);
  };

  return (
    <div
      className="bg-white/80 rounded-xl shadow-lg border border-gray-200 p-4 flex flex-col items-center backdrop-blur cursor-pointer transition hover:shadow-xl hover:border-blue-400 relative"
      onClick={handleCardClick}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${product.title}`}
    >
      <img
        src={product.image || "/placeholder.png"}
        alt={product.title}
        className="w-32 h-32 object-contain mb-4"
      />
      <h3 className="font-semibold text-lg text-center mb-1 text-gray-900">{product.title}</h3>
      <div className="text-black font-bold mb-2">${product.price}</div>
      {product.rating && (
        <div className="flex items-center mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={16}
              className={
                i < (product.rating ?? 0) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
              }
              fill={i < (product.rating ?? 0) ? "#facc15" : "none"}
            />
          ))}
        </div>
      )}
      <button
        data-add-to-cart
        className="mt-auto bg-blue-600 hover:bg-blue-700 text-white rounded-md px-4 py-2 w-full font-medium z-10"
        onClick={(e) => {
          e.stopPropagation();
          addToCart(product);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}
