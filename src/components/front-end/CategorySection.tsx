// components/CategorySection.tsx  
import React, { useState, useEffect } from 'react';  
import { useSession } from 'next-auth/react';  
import { Iproduct, Category, Review } from '@/types/core';  
import Image from 'next/image';  

interface CategorySectionProps {  
  category: Category;  
  onClick: () => void; // Add onClick prop  
  addToCart: (product: Iproduct) => void; // Function to add items to cart  
}  

const CategorySection = ({ category, onClick, addToCart }: CategorySectionProps) => {  
  const [products, setProducts] = useState<Iproduct[]>([]);  
  const { data: session } = useSession();  

  useEffect(() => {  
    const fetchProducts = async () => {  
      try {  
        const response = await fetch(`/api/products?category=${category}`);  
        const data = await response.json();  
        setProducts(data);  
      } catch (error) {  
        console.error('Error fetching products:', error);  
        // Consider showing user-friendly error messages  
      }  
    };  

    fetchProducts();  
  }, [category]);  

  const handleAddToCart = (product: Iproduct) => {  
    console.log('Adding product to cart:', product);  
    addToCart(product); // Call the passed-in addToCart function  
  };  

  const calculateAverageRating = (reviews: Review[]): number => {  
    if (reviews.length === 0) return 0;  
    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);  
    return totalRating / reviews.length;  
  };  

  return (  
    <div className="container mx-auto py-10">  
      <h2 className="text-3xl font-bold text-gray-800 mb-6">{category}</h2>  
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">  
        {products  
          .filter((product) => product.category === category)  
          .map((product) => (  
            <div key={product._id} className="bg-white rounded-lg shadow-md p-4">  
              <Image  
                src={product.imgSrc}  
                alt={product.name}  
                className="w-full h-48 object-cover rounded-md mb-4"  
                width={200} // Specify a width for the Image component  
                height={200} // Optionally specify a height  
                layout="responsive" // Use layout="responsive" for better image handling  
              />  
              <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>  
              <p className="text-gray-600 mb-2">  
                Price: {product.price.amount} {product.price.currency}  
              </p>  
              {session && (  
                <button  
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md"  
                  onClick={() => handleAddToCart(product)}  
                >  
                  Add to Cart  
                </button>  
              )}  
              <div className="mt-2">  
                {product.reviews.length > 0 && (  
                  <p className="text-gray-600">  
                    Average Rating: {calculateAverageRating(product.reviews).toFixed(1)}  
                  </p>  
                )}  
              </div>  
            </div>  
          ))}  
      </div>  
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