"use client";
import TrendingProduct from "@/components/front-end/TrendingProduct";
import { NavbarCartWrapper } from "@/components/front-end/NavbarCartWrapper";
import Footer from "@/components/front-end/Footer";
import { Suspense } from "react";
import CategorySection from "@/components/front-end/CategorySection";
import { Category } from "@/types/core";
import { ALL } from "dns";

const Home = async () => {
  return (
    <main className="flex flex-col min-h-screen">
      <NavbarCartWrapper />
      <div className="flex-grow">
        <Suspense fallback={<div>Loading...</div>}>
          <TrendingProduct />
          {/* <CategorySection category={Category.ELECTRONICS as Category}/>
          <CategorySection category={Category.JEWELERY as Category}/>
          <CategorySection category={Category.MENSCLOTHING as Category}/>
          <CategorySection category={Category.KIDSCLOTHING as Category}/>
          <CategorySection category={Category.ALL as Category}/> */}
        </Suspense>
      </div>
      {/* <Footer /> */}
    </main>
  );
};

export default Home;