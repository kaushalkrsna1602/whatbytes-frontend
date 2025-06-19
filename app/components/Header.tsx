"use client";
import { ShoppingCart, Search } from "lucide-react";
import Link from "next/link";
import { useCartStore } from "../context/cartStore";
import { useRouter } from "next/navigation";
import React, { useState, useRef, useEffect } from "react";
import { products as allProducts } from "../data/products";

export default function Header() {
  const cartCount = useCartStore((state) =>
    state.items.reduce((sum, item) => sum + item.quantity, 0)
  );
  const [search, setSearch] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const recommendations =
    search.trim().length > 0
      ? allProducts.filter((p) =>
          p.title.toLowerCase().includes(search.toLowerCase())
        ).slice(0, 5)
      : [];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (search.trim().length > 0) {
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  }, [search]);

  // Hide dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        inputRef.current &&
        !inputRef.current.contains(e.target as Node)
      ) {
        setShowDropdown(false);
      }
    }
    if (showDropdown) {
      document.addEventListener("mousedown", handleClick);
    }
    return () => document.removeEventListener("mousedown", handleClick);
  }, [showDropdown]);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/?search=${encodeURIComponent(search)}`);
    setShowDropdown(false);
  };

  const handleRecommendationClick = (id: string) => {
    router.push(`/product/${id}`);
    setShowDropdown(false);
    setSearch("");
  };

  return (
    <header className="bg-blue-800 text-white px-6 py-4 flex items-center justify-between relative">
      <Link href="/" className="text-2xl font-bold">Logo</Link>
      <div className="flex-1 flex justify-center">
        <form onSubmit={handleSearch} className="w-full max-w-lg relative">
          <div className="relative">
            <input
              ref={inputRef}
              type="text"
              placeholder="Search for products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-lg border border-gray-300 bg-white/80 shadow-md pl-10 pr-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-400 backdrop-blur"
              onFocus={() => search && setShowDropdown(true)}
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
            {showDropdown && recommendations.length > 0 && (
              <div className="absolute left-0 right-0 mt-2 bg-white shadow-lg rounded-lg z-50 max-h-64 overflow-auto border border-gray-200">
                {recommendations.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    className="flex items-center gap-3 px-4 py-2 w-full hover:bg-blue-50 text-left"
                    onClick={() => handleRecommendationClick(p.id)}
                  >
                    <img src={p.image || "/placeholder.png"} alt={p.title} className="w-8 h-8 object-contain rounded" />
                    <span className="text-gray-900 font-medium">{p.title}</span>
                    <span className="ml-auto text-blue-700 font-semibold">${p.price}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </form>
      </div>
      <div className="flex items-center gap-6">
        <Link href="/cart" className="relative flex items-center">
          <ShoppingCart size={24} />
          {isMounted && cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-xs rounded-full px-1.5">
              {cartCount}
            </span>
          )}
          <span className="ml-2">Cart</span>
        </Link>
      </div>
    </header>
  );
}
