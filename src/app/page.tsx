// "use client";
import TrendingProduct from "@/components/front-end/TrendingProduct";
import { NavbarCartWrapper } from "@/components/front-end/NavbarCartWrapper";
import Footer from "@/components/front-end/Footer";
import { Suspense } from "react";
import CategorySection from "@/components/front-end/CategorySection";
import { Category } from "@/types/core";
import { ALL } from "dns";
import Hero from "@/components/front-end/Hero";
import Feature from "@/components/front-end/Feature";

const Home = async () => {
  return (
    <main className="flex flex-col min-h-screen">
      <div className="flex-grow">
      <Hero />
      <Feature />
      <section className="px-2 sm:px-6 md:px-12 lg:px-24 py-8 bg-gradient-to-b from-white to-gray-50 rounded-xl shadow-md my-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
          Trending Products
        </h2>
        <Suspense fallback={
          <div className="flex justify-center items-center py-12">
        <span className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></span>
        <span className="ml-4 text-gray-500">just a minute...</span>
          </div>
        }>
          <TrendingProduct />
        </Suspense>
      </section>
      </div>
      {/* <Footer /> */}
    </main>
  );
};

export default Home;