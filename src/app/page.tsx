import TrendingProduct from "@/components/front-end/TrendingProduct";
import { NavbarCartWrapper } from "@/components/front-end/NavbarCartWrapper";
import Footer from "@/components/front-end/Footer";
import { Suspense } from "react";

const Home = async () => {
  return (
    <main className="flex flex-col min-h-screen">
      <NavbarCartWrapper />
      <div className="flex-grow">
        <Suspense fallback={<div>Loading...</div>}>
          <TrendingProduct />
        </Suspense>
      </div>
      {/* <Footer /> */}
    </main>
  );
};

export default Home;
