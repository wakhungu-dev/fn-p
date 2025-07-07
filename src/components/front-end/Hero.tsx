"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const Hero = () => {
  interface Product {
    id: string | number;
    name: string;
    image: string;
  }
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  

  const [showcaseIndex, setShowcaseIndex] = useState(0);

  // Auto-rotate showcased product images every 4 seconds
  useEffect(() => {
    if (products.length === 0) return;
    const interval = setInterval(() => {
      setShowcaseIndex((prev) => (prev + 1) % products.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [products]);

  // Add a subtle animated gradient overlay
  const gradientOverlay =
    "before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-br before:from-red-100 before:via-transparent before:to-red-200 before:opacity-60 before:pointer-events-none";

  // Add a glassmorphism effect to product cards
  const glassCard =
    "backdrop-blur-md bg-white/60 border border-white/30 shadow-lg";

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

  const formatTimeUnit = (unit: number) => unit.toString().padStart(2, "0");

  return (
    <div className="relative hero-gradient py-20 md:py-32 mt-4 overflow-hidden h-screen bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="container mx-auto grid md:grid-cols-2 items-center gap-12 px-6">
      {/* Left Section */}
      <div className="space-y-8 md:max-w-lg"> {/* Increased spacing */}
        <p className="text-xl font-medium text-gray-700 animate-fade-in">
        Starting at <span className="font-bold text-red-500 hover:text-red-600 transition-colors">Ksh500.00</span>
        </p>
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
        Lynrose Collection
        </h1>
        
        <Link 
        href="/products" 
        className="inline-block bg-red-600 text-white text-lg px-8 py-4 rounded-md hover:bg-red-700 
        transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
        style={{ boxShadow: "0 4px 20px rgba(255, 0, 0, 0.2)" }}
        

        >
        Shop now
        </Link>
      </div>

      {/* Right Section - Product Images */}
      <div className="relative hidden md:flex flex-wrap gap-8 justify-center items-center flex-1">
        {loading ? (
        <p className="text-gray-500 animate-pulse">Loading products...</p>
        ) : (
        products.map((product, index) => (
          <div 
            key={product.id} 
            className={`w-64 h-64 rounded-lg overflow-hidden shadow-xl transform 
            transition-all duration-500 hover:scale-105 hover:shadow-2xl
            ${index % 2 === 0 ? "rotate-2" : "-rotate-2"}`}
          >
          <Image
            src={product.image || "/images/placeholder.jpg"}
            alt={product.name}
            width={256}
            height={256}
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
            priority
          />
          </div>
        ))
        )}
      </div>
      </div>
    </div>
  );
};

export default Hero;
