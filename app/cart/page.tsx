"use client";
import React from "react";
import { useCartStore } from "../context/cartStore";
import { X } from "lucide-react";
import Link from "next/link";

export default function CartPage() {
  const { items, updateQuantity, removeFromCart } = useCartStore((state) => ({
    items: state.items,
    updateQuantity: state.updateQuantity,
    removeFromCart: state.removeFromCart,
  }));

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleIncrement = (id: string, current: number) => {
    updateQuantity(id, current + 1);
  };
  const handleDecrement = (id: string, current: number) => {
    if (current > 1) updateQuantity(id, current - 1);
  };

  if (items.length === 0) {
    return (
      <div className="max-w-2xl mx-auto py-16 text-center text-gray-500 text-xl">
        Your cart is empty.<br />
        <Link href="/" className="text-blue-600 hover:underline">Go shopping</Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-2xl font-bold mb-8 text-grey-900">Your Cart</h1>
      <div className="flex flex-col gap-6">
        {items.map((item) => (
          <div key={item.id} className="flex items-center gap-6 bg-white rounded-xl shadow p-4">
            <img
              src={item.image || "/placeholder.png"}
              alt={item.title}
              className="w-20 h-20 object-contain rounded"
            />
            <div className="flex-1">
              <div className="font-semibold text-lg text-gray-900">{item.title}</div>
              <div className="text-black">${item.price}</div>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-gray-900">Qty:</span>
                <button
                  className="px-2 py-1 rounded bg-gray-200 text-gray-700 hover:bg-gray-300 border border-gray-300"
                  onClick={() => handleDecrement(item.id, item.quantity)}
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <input
                  type="number"
                  min={1}
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                  className="w-16 rounded border border-gray-400 bg-white text-black px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400 text-center"
                />
                <button
                  className="px-2 py-1 rounded bg-gray-200 text-gray-700 hover:bg-gray-300 border border-gray-300"
                  onClick={() => handleIncrement(item.id, item.quantity)}
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>
            <div className="font-semibold text-lg text-black">${item.price * item.quantity}</div>
            <button
              className="ml-4 text-gray-400 hover:text-red-500"
              onClick={() => removeFromCart(item.id)}
              aria-label="Remove"
            >
              <X />
            </button>
          </div>
        ))}
      </div>
      {/* Price Summary */}
      <div className="mt-10 flex justify-end">
        <div className="bg-blue-50 rounded-lg p-6 min-w-[250px]">
          <div className="flex justify-between mb-2">
            <span className="text-gray-900">Subtotal</span>
            <span className="font-semibold text-black">${total}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-900">Shipping</span>
            <span className="font-semibold text-black">$0</span>
          </div>
          <div className="flex justify-between text-lg font-bold mt-4">
            <span className="text-gray-900">Total</span>
            <span className="text-black">${total}</span>
          </div>
        </div>
      </div>
    </div>
  );
} 