"use client";
import React, { FC, useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { Category, Iproduct } from '@/types/core';
import { AppDispatch, RootState } from '@/redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '@/redux/features/productsSlice';
import CategorySection from './CategorySection';
import { addToCart } from '@/redux/features/cartSlice'; // Import your cart slice action
import { makeToast } from '@/utils/helper';
import Spinner from '../admin-panel/Loader';
import Pagination from '../Pagination';

const getProducts = async (): Promise<Iproduct[]> => {
  let res = await fetch('/api/products');
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
  return await res.json();
};

const TrendingProduct: FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const dispatch: AppDispatch = useDispatch();
  const { filteredProducts } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        dispatch(setProducts(Array.isArray(data) ? data : []));
      } catch (err) {
        setError('Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [dispatch]);

  if (loading) {
    return <Spinner />; // Consider a spinner or loader here
  }

  if (error) {
    return <div>{error}</div>; // Display error message
  }

  if (!filteredProducts || filteredProducts.length === 0) {
    return <div>No products found</div>; // Placeholder for no products found
  }

  return (
    <div className='container mt-32 pt-8 pb-16'>
      <div className='sm:flex justify-between items-center'>
        <h2 className='font-bold text-lg'>Products</h2>
        <div className='text-gray-500 flex gap-4 text-xl mt-4 sm:mt-0'>
          <div className='cursor-pointer'>
            <h2 className='font-bold text-lg'>
              {selectedCategory && (
                <span className='text-blue-500'>{`Category: ${selectedCategory}`}</span>
              )}
            </h2>
            {selectedCategory && (
              <CategorySection
                category={selectedCategory}
                onClick={() => setSelectedCategory(null)} // Reset on click
                addToCart={(product: Iproduct) => {
                  dispatch(addToCart(product));
                  makeToast('success', 'Product added to cart');
                }}
              />
            )}
          </div>
          <div className='cursor-pointer' onClick={() => setSelectedCategory(Category.ELECTRONICS)}>
            Electronics
          </div>
          <div className='cursor-pointer' onClick={() => setSelectedCategory(Category.JEWELERY)}>
            Jewellery
          </div>
          <div className='cursor-pointer' onClick={() => setSelectedCategory(Category.MENSCLOTHING)}>
            Men&apos;s Clothing
          </div>
          <div className='cursor-pointer' onClick={() => setSelectedCategory(Category.KIDSCLOTHING)}>
            Kid&apos;s Clothing
          </div>
          <div className='cursor-pointer' onClick={() => setSelectedCategory(Category.ALL)}>
            All
          </div>
        </div>
      </div>

      <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8'>
        {filteredProducts.map((item: Iproduct) => (
          <ProductCard key={item._id} product={item} />
        ))}
      </div>

      <div className='mt-8'>
        <Pagination totalPages={(filteredProducts.length / 5) || 1} currentPage={1} />
      </div>
    </div>
  );
};

export default TrendingProduct;
