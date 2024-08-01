// pages/products.tsx
import TrendingProduct from "@/components/front-end/TrendingProduct";
import React from "react";

const Products = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8">Our Products</h1>
      <TrendingProduct  />

    </div>
  );
};

export default Products;
