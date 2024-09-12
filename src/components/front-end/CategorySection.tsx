// components/CategorySection.tsx
import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { Iproduct, Category } from '@/types/core';
import Image from 'next/image';
import Rating from '../Rating';

interface CategorySectionProps {
  category: Category;
  onClick: () => void;
  addToCart: (product: Iproduct) => void;
}

const CategorySection = ({ category, onClick, addToCart }: CategorySectionProps) => {
  const [products, setProducts] = useState<Iproduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { data: session } = useSession();

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(false);
      try {
        const response = await fetch(`/api/products?category=${category}`);
        const data = await response.json();

        if (data.length === 0) {
          setError(true);
        } else {
          setProducts(data);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">{category}</h2>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-600">No products available or failed to load products.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products
            .filter((product) => product.category === category)
            .map((product) => (
              <div key={product._id} className="bg-white rounded-lg shadow-md p-4">
                <Image
                  src={product.imgSrc}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-md mb-4"
                  width={200}
                  height={200}
                  layout="responsive"
                />
                <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-2">
                  Price: {product.price.amount} {product.price.currency}
                </p>
                {session && (
                  <button
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                )}
                <Rating reviews={product.reviews} />
              </div>
            ))}
        </div>
      )}

      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md mt-6"
        onClick={onClick}
      >
        Close
      </button>
    </div>
  );
};

export default CategorySection;
