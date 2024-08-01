import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="bg-[#f8f8f8] py-20 mt-4">
      <div className="container grid md:grid-cols-2 py-8">
        <div className="flex items-center">
          <div className="max-w-[450px] space-y-4">
            {/* Price */}
            <p className="text-topHeadingSecondary">
              Starting at <span className="font-bold">ksh999.00</span>
            </p>
            {/* Title */}
            <h1 className="text-topHeadingPrimary font-bold text-4xl md:text-5xl">
              lynrose collection
            </h1>
            {/* Offer */}
            <h3 className="text-2xl font-['oregano',cursive]">
              Exclusive offer <span className="text-red-500">-10%</span> off this week
            </h3>

            {/* Shop now link */}
            <Link
              className="inline-block bg-white px-6 py-3 hover:bg-accent hover:text-white"
              href="/productz"
            >
              Shop now
            </Link>
          </div>
        </div>
        {/* Hero image */}
        {/* <div>
          <Image
            width={50}
            height={50}
            className="ml-auto"
            src="/hero.jpeg"
            alt="hero"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
