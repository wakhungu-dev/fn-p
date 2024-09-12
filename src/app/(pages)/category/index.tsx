// pages/category/index.tsx
import React, { useState } from 'react';
import { Category } from '@/types/core';
import CategorySection from '@/components/front-end/CategorySection';

const CategoryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = event.target.value as Category;
    setSelectedCategory(selected);
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-4">Shop by Category</h1>

      {/* Dropdown for selecting category */}
      <div className="mb-6">
        <label htmlFor="categoryDropdown" className="block text-lg font-medium text-gray-700">
          Select a category:
        </label>
        <select
          id="categoryDropdown"
          className="block w-full mt-2 border border-gray-300 rounded-md py-2 px-3"
          onChange={handleCategoryChange}
        >
          <option value="" disabled selected>
            Choose a category
          </option>
          <option value={Category.ELECTRONICS}>Electronics</option>
          <option value={Category.JEWELERY}>Jewelry</option>
          <option value={Category.MENSCLOTHING}>Men&apos;s Clothing</option>
          <option value={Category.WOMENSCLOTHING}>Women&apos;s Clothing</option>
          <option value={Category.KIDSCLOTHING}>Kid&apos;s Clothing</option>
        </select>
      </div>

      {/* Render CategorySection only if a category is selected */}
      {selectedCategory && (
        <CategorySection
          category={selectedCategory}
          onClick={() => setSelectedCategory(null)} // Reset category on close
          addToCart={(product) => console.log('Add to cart:', product)} // Handle add to cart
        />
      )}
    </div>
  );
};

export default CategoryPage;
