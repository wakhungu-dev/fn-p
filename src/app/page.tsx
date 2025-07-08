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
      <div className="flex-grow ">
        <Hero />
        <Feature />
        <Suspense fallback={<div>wait..</div>}>
          <TrendingProduct />
          
        </Suspense>
      </div>
      {/* <Footer /> */}
    </main>
  );
};

export default Home;