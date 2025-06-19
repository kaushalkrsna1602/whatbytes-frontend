# Whatbytes Frontend Assignment

A modern e-commerce frontend built with NExt.js and Tailwind Css, featuring product listing, filtering, cart, and product detail pages.

## 🚀 Live Demo

[View the deployed app on Vercel](https://whatbytes-frontend-phi.vercel.app/)

---

## Features

- Responsive product listing with category and price filters
- Search bar with live product recommendations
- Product detail page with image, description, and add to cart
- Cart page with quantity controls, remove, and price summary
- Clean, accessible UI with high-contrast design
- Built with Next.js App Router and Zustand for state management

## Tech Stack

- [Next.js 15 (App Router)](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [Lucide React Icons](https://lucide.dev/)

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```
2. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Folder Structure

- `app/` - Main app directory (pages, components, context)
- `app/components/` - Reusable UI components
- `app/cart/page.tsx` - Cart Page
- `app/data/products.ts` - Product data source
- `app/context/cartStore.ts` - Zustand cart store

