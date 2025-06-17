import React from "react";

const categories = ["All", "Electronics", "Clothing", "Home"];

export default function SidebarFilters({
  selectedCategories = [],
  onCategoryChange,
  priceRange = [0, 1000],
  onPriceChange,
  minPrice = 0,
  maxPrice = 1000,
}) {
  return (
    <aside className="bg-blue-800 text-white rounded-xl p-6 w-full max-w-xs">
      <h2 className="text-xl font-semibold mb-6">Filters</h2>
      <div className="mb-6">
        <h3 className="font-medium mb-2">Category</h3>
        <div className="flex flex-col gap-2">
          {categories.map((cat) => (
            <label key={cat} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedCategories.includes(cat) || (cat === "All" && selectedCategories.length === 0)}
                onChange={() => onCategoryChange(cat)}
                className="accent-blue-500"
              />
              <span>{cat}</span>
            </label>
          ))}
        </div>
      </div>
      <div>
        <h3 className="font-medium mb-2">Price</h3>
        <div className="flex items-center gap-2">
          <span>{minPrice}</span>
          <input
            type="range"
            min={minPrice}
            max={maxPrice}
            value={priceRange[1]}
            onChange={(e) => onPriceChange([minPrice, Number(e.target.value)])}
            className="w-full accent-blue-500"
          />
          <span>{maxPrice}</span>
        </div>
      </div>
    </aside>
  );
}
