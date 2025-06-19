"use client"

import { create } from "zustand";
import { Product } from "../data/products";

type CartItem = Product & { quantity: number };


// Cart State
type CartState = {
  items: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
};

function getInitialCart(): CartItem[] {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem("cart-items");
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch {
        return [];
      }
    }
  }
  return [];
}

// Cart Store
export const useCartStore = create<CartState>((set, get) => {
  // Load initial cart from localStorage
  const initialItems = typeof window !== "undefined" ? getInitialCart() : [];
  // Subscribe to changes and persist to localStorage
  if (typeof window !== "undefined") {
    // Zustand subscribe workaround for SSR
    setTimeout(() => {
      useCartStore.subscribe((state) => {
        localStorage.setItem("cart-items", JSON.stringify(state.items));
      });
    }, 0);
  }
  return {
    items: initialItems,
    addToCart: (product, quantity = 1) =>
      set((state) => {
        const existing = state.items.find((item) => item.id === product.id);
        if (existing) {
          return {
            items: state.items.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + quantity }
                : item
            ),
          };
        }
        return { items: [...state.items, { ...product, quantity }] };
      }),
    removeFromCart: (id) =>
      set((state) => ({
        items: state.items.filter((item) => item.id !== id),
      })),
    updateQuantity: (id, quantity) =>
      set((state) => ({
        items: state.items.map((item) =>
          item.id === id ? { ...item, quantity } : item
        ),
      })),
    clearCart: () => set({ items: [] }),
  };
});
