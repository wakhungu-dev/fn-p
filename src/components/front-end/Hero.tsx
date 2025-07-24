"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useCallback } from "react";

interface Product {
  id: string | number;
  name: string;
  image: string;                
  price: number;
}

const Hero = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [showcaseIndex, setShowcaseIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const handlePrev = useCallback(() => {
    setShowcaseIndex(prev => (prev - 1 + products.length) % products.length);
  }, [products.length]);

  const handleNext = useCallback(() => {
    setShowcaseIndex(prev => (prev + 1) % products.length);
  }, [products.length]);

  // Auto-rotate only when not hovering
  useEffect(() => {
    if (products.length === 0 || isHovering) return;
    const interval = setInterval(handleNext, 4000);
    return () => clearInterval(interval);
  }, [products, isHovering, handleNext]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/products");
        const data = await response.json();
        setProducts(data.slice(0, 3));
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-16 md:py-24">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 -top-20 w-96 h-96 bg-red-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>
      
      <div className="container mx-auto grid md:grid-cols-2 items-center gap-10 px-4 sm:px-6 relative z-10">
        {/* Left Section - Enhanced Content */}
        <div className="space-y-7 text-center md:text-left">
          <div className="inline-block bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-medium mb-2 animate-fade-in">
            New Summer Collection
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
            <span className="block">Lynrose</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700 mt-2">
              Fashion Revolution
            </span>
          </h1>
          
          <p className="text-lg text-gray-600 max-w-md mx-auto md:mx-0">
            Premium quality fabrics with sustainable production. Designed for comfort without compromising style.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              href="/products"
              className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-medium rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-[1.03] shadow-lg hover:shadow-xl shadow-red-200 flex items-center justify-center gap-2"
            >
              Shop Collection
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
            
            <Link
              href="/about"
              className="px-8 py-4 bg-white text-gray-800 font-medium rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-center gap-2"
            >
              Our Story
            </Link>
          </div>
        </div>

        {/* Right Section - Enhanced Product Showcase */}
        <div 
          className="relative flex justify-center items-center min-h-[400px]"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {loading ? (
            <div className="grid grid-cols-3 gap-5">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="bg-gray-100 border-2 border-dashed rounded-xl w-full h-[300px] animate-pulse"></div>
              ))}
            </div>
          ) : products.length > 0 ? (
            <div className="w-full max-w-4xl">
              {/* Main Showcase Card */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl transform transition-all duration-700">
                <div className="aspect-square w-full relative">
                  <Image
                    src={products[showcaseIndex].image || "/images/placeholder.jpg"}
                    alt={products[showcaseIndex].name}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  
                  <div className="absolute bottom-0 left-0 w-full p-6 text-white">
                    <h3 className="text-2xl font-bold">{products[showcaseIndex].name}</h3>
                    <p className="text-red-300 font-medium mt-1">
                      Ksh {products[showcaseIndex].price.toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Thumbnail Navigation */}
              <div className="flex justify-center mt-6 gap-3">
                {products.map((product, index) => (
                  <button
                    key={product.id}
                    onClick={() => setShowcaseIndex(index)}
                    className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                      index === showcaseIndex 
                        ? "border-red-500 scale-110 shadow-md" 
                        : "border-transparent opacity-70 hover:opacity-100"
                    }`}
                    aria-label={`Show ${product.name}`}
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </button>
                ))}
              </div>
              
              {/* Navigation Arrows */}
              {products.length > 1 && (
                <>
                  <button
                    aria-label="Previous product"
                    onClick={handlePrev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all hover:scale-110"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    aria-label="Next product"
                    onClick={handleNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all hover:scale-110"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}
            </div>
          ) : (
            <div className="text-center p-10 bg-red-50/50 rounded-xl border border-red-100">
              <p className="text-red-800">No products available</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;