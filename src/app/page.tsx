import TrendingProduct from "@/components/front-end/TrendingProduct";
import { NavbarCartWrapper } from "@/components/front-end/NavbarCartWrapper";
import Footer from "@/components/front-end/Footer";
import { Suspense } from "react";

const Home = async () => {
  return (
    <main>
      <NavbarCartWrapper />
      <Suspense fallback={<div>Loading...</div>}>
        <TrendingProduct />
      </Suspense>
      <Footer />
    </main>
  );
};

export default Home;
