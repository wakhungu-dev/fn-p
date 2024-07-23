"use client"
import React, { FC, useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { Iproduct } from '@/types/core';

const getProducts = async (): Promise<Iproduct[]> => {
  let res = await fetch ('/api/products');
  return await res.json();
}

const TrendingProduct: FC = () => {
  const [products, setProducts] = useState<Iproduct[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(Array.isArray(data) ? data : []);
      } catch (err) {
        setError('Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Placeholder for loading state
  }

  if (error) {
    return <div>{error}</div>; // Display error message
  }

  if (!products || products.length === 0) {
    return <div>No products found</div>; // Placeholder for no products found
  }

  return (
    <div className='container mt-32'>
      <div className='sm:flex justify-between items-center'>
        <h2 className='font-bold text-lg'>Trending Products</h2>
        <div className='text-gray-500 flex gap-4 text-xl mt-4 sm:mt-0'>
          <div className='cursor-pointer'>New</div>
          <div>Featured</div>
          <div>Best Seller</div>
        </div>
      </div>

      <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8'>
        {products.map((item: Iproduct) => (
          <ProductCard
            key={item._id}
            product={item} // Ensure key is unique
          />
        ))}
      </div>
    </div>
  );
}

export default TrendingProduct;
