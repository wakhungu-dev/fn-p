import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-[#f8f8f8] to-[#ececec] py-20 md:py-40 mt-4 overflow-hidden">
      {/* Hero content */}
      <div className="container mx-auto grid md:grid-cols-2 items-center gap-8 px-4 relative z-10">
        {/* Left side content */}
        <div className="space-y-6 md:max-w-md">
          {/* Price */}
          <p className="text-xl md:text-2xl font-medium text-gray-700">
            Starting at <span className="font-bold text-accent">Ksh500.00</span>
          </p>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Lynrose Collection
          </h1>

          {/* Offer */}
          <h3 className="text-3xl md:text-4xl font-light text-gray-600">
            Exclusive offer{" "}
            <span className="text-red-500 font-semibold">-10% off</span> this week
          </h3>

          {/* Shop now button */}
          <Link
            href="/products"
            className="inline-block bg-accent text-white text-lg md:text-xl px-8 py-4 rounded-md hover:bg-accent-dark hover:shadow-lg transition duration-300"
          >
            Shop now
          </Link>
        </div>
      </div>

      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-accent opacity-20 rounded-full -z-10 transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-accent opacity-10 rounded-full -z-10 transform -translate-x-1/4 translate-y-1/4"></div>
      <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-accent opacity-15 rounded-full -z-10"></div>
    </div>
  );
};

export default Hero;
