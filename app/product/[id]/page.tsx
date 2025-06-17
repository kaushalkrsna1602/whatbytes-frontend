"use client";

import React, { useState, useMemo } from "react";
import { products } from "../../data/products";
import { useCartStore } from "../../context/cartStore";
import { Star } from "lucide-react";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);
  const addToCart = useCartStore((state) => state.addToCart);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <div className="max-w-2xl mx-auto py-16 text-center text-gray-500 text-xl">Product not found.</div>;
  }

  return (
    <div className={`${inter.className} antialiased bg-gray-50 min-h-screen flex flex-col`}>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 py-12 px-4">
        {/* Image Section */}
        <div className="flex-1 flex items-center justify-center">
          <img
            src={product.image || "/placeholder.png"}
            alt={product.title}
            className="w-80 h-80 object-contain rounded-xl bg-white shadow"
          />
        </div>
        {/* Details Section */}
        <div className="flex-1 flex flex-col gap-4">
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
          <div className="text-2xl font-semibold text-blue-700 mb-2">${product.price}</div>
          {product.rating && (
            <div className="flex items-center mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className={i < product.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                  fill={i < product.rating ? "#facc15" : "none"}
                />
              ))}
            </div>
          )}
          <div className="text-gray-700 mb-2">{product.description}</div>
          <div className="text-sm text-gray-500 mb-4">Category: {product.category}</div>
          {/* Quantity Selector */}
          <div className="flex items-center gap-2 mb-4">
            <span className="font-medium">Quantity:</span>
            <input
              type="number"
              min={1}
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-16 rounded border px-2 py-1"
            />
          </div>
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-6 py-3 font-semibold text-lg mt-2"
            onClick={() => addToCart(product, quantity)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
} 