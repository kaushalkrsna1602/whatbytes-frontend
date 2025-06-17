"use client";
import React, { useState, useMemo } from "react";
import SidebarFilters from "./components/SidebarFilters";
import ProductGrid from "./components/ProductGrid";
import { products as allProducts, Product } from "./data/products";
import { useSearchParams } from "next/navigation";

const allCategories = ["Electronics", "Clothing", "Home"];

export default function HomePage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const searchParams = useSearchParams();
  const search = searchParams.get("search") || "";

  // Filtering logic
  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      const inCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(product.category);
      const inPrice =
        product.price >= priceRange[0] && product.price <= priceRange[1];
      const inSearch =
        product.title.toLowerCase().includes(search.toLowerCase()) ||
        (product.description?.toLowerCase().includes(search.toLowerCase()) ?? false);
      return inCategory && inPrice && inSearch;
    });
  }, [selectedCategories, priceRange, search]);

  // Handlers
  const handleCategoryChange = (cat: string) => {
    if (cat === "All") {
      setSelectedCategories([]);
    } else {
      setSelectedCategories((prev) =>
        prev.includes(cat)
          ? prev.filter((c) => c !== cat)
          : [...prev, cat]
      );
    }
  };

  const handlePriceChange = (range: [number, number]) => {
    setPriceRange(range);
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 px-4 py-8 max-w-7xl mx-auto">
      <div className="md:w-1/4 w-full mb-8 md:mb-0">
        <SidebarFilters
          selectedCategories={selectedCategories}
          onCategoryChange={handleCategoryChange}
          priceRange={priceRange}
          onPriceChange={handlePriceChange}
          minPrice={0}
          maxPrice={1000}
        />
      </div>
      <div className="flex-1">
        <h1 className="text-2xl font-bold mb-4">Product Listing</h1>
        {filteredProducts.length === 0 ? (
          <div className="text-center text-gray-500 py-16">No products found.</div>
        ) : (
          <ProductGrid products={filteredProducts} />
        )}
      </div>
    </div>
  );
}
