"use client";
import { ShoppingCart, User, Search } from "lucide-react";
import Link from "next/link";
import { useCartStore } from "../context/cartStore";

export default function Header() {
  const cartCount = useCartStore((state) =>
    state.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  return (
    <header className="bg-blue-800 text-white px-6 py-4 flex items-center justify-between">
      <Link href="/" className="text-2xl font-bold">Logo</Link>
      <div className="flex-1 mx-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full rounded-md pl-10 pr-4 py-2 text-black"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>
      </div>
      <div className="flex items-center gap-6">
        <Link href="/cart" className="relative flex items-center">
          <ShoppingCart size={24} />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-xs rounded-full px-1.5">
              {cartCount}
            </span>
          )}
          <span className="ml-2">Cart</span>
        </Link>
        <User size={28} />
      </div>
    </header>
  );
}
