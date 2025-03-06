"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  interface Product {
    id: string | number;
    name: string;
    image: string;
  }
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const deadline = new Date();
    deadline.setDate(deadline.getDate() + 7);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = deadline.getTime() - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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
    <div className="relative bg-gradient-to-r from-gray-100 to-gray-200 py-20 md:py-32 mt-4 overflow-hidden">
      <div className="container mx-auto grid md:grid-cols-2 items-center gap-12 px-6">
        {/* Left Section */}
        <div className="space-y-6 md:max-w-lg">
          <p className="text-xl font-medium text-gray-700">
            Starting at <span className="font-bold text-red-500">Ksh500.00</span>
          </p>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Lynrose Collection
          </h1>
          <div className="bg-red-500 text-white p-5 rounded-lg animate-pulse">
            <h3 className="text-2xl font-semibold">Limited Offer: <span className="font-bold">-10% off</span></h3>
            <div className="flex gap-3 text-lg mt-2">
              <span>{formatTimeUnit(timeLeft.days)}d</span>
              <span>{formatTimeUnit(timeLeft.hours)}h</span>
              <span>{formatTimeUnit(timeLeft.minutes)}m</span>
              <span>{formatTimeUnit(timeLeft.seconds)}s</span>
            </div>
          </div>
          <Link href="/products" className="inline-block bg-red-600 text-white text-lg px-8 py-4 rounded-md hover:bg-red-700 transition duration-300">
            Shop now
          </Link>
        </div>

        {/* Right Section - Product Images */}
        <div className="relative hidden md:flex flex-wrap gap-4 justify-center items-center">
          {loading ? (
            <p className="text-gray-500">Loading products...</p>
          ) : (
            products.map((product, index) => (
              <div key={product.id} className={`w-48 h-48 rounded-lg overflow-hidden shadow-xl transform transition duration-500 ${index % 2 === 0 ? "rotate-2" : "-rotate-2"}`}>
                <Image
                  src={product.image || "/images/placeholder.jpg"}
                  alt={product.name}
                  width={192}
                  height={192}
                  className="object-cover w-full h-full"
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
