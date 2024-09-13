import AddToCartButton from '@/components/AddToCartButton';
import ParentDetails from '@/components/ParentDetails';
import SocialShare from '@/components/SocialShare';
import Product from '@/libs/models/product';
import { mongoDbConnection } from '@/libs/mongoDb';
import { Iproduct } from '@/types/core';
import Image from 'next/image';
import React from 'react';

const getProductById = async (id: string): Promise<Iproduct | null> => {
  try {
    await mongoDbConnection();
    const product = await Product.findById(id);
    return product ? product.toObject() as Iproduct : null;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
};

// Define an asynchronous function called "page" that takes a parameter "slug"
const page = async ({ params: { slug } }: any) => {
  // Call the "getProductById" function and pass the "slug" parameter
  const product = await getProductById(slug);

  // If the product is not found, return a "notFound" object
  if (!product) {
    return { notFound: true };
  }

  // Destructure the properties from the "product" object
  const { name, category, price, imgSrc, description } = product;

  // Return the JSX code for rendering the product details
  return (
    <div
      className="pt-8 pb-16 group border border-gray-200 rounded-md shadow-md flex flex-col md:flex-row"
      style={{
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div
        className="text-center border-b border-gray-200 w-full md:w-1/2 overflow-hidden flex justify-center"
        style={{
          height: "350px",
        }}
      >
        <Image
          src={imgSrc}
          alt={name}
          width={300}
          height={300}
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="px-4 py-4 flex flex-col w-full md:w-1/2">
        <p
          className="text-gray-500 text-[14px] font-medium uppercase tracking-wider"
          style={{
            fontWeight: "600",
          }}
        >
          {category}
        </p>
        <h1
          className="font-semibold text-xl mt-2"
          style={{
            fontWeight: "700",
            fontSize: "1.25rem",
          }}
        >
          {name}
        </h1>
        <p className="text-gray-600 mt-2">{description}</p>
        <div className="flex gap-2 items-center mt-4">
          <h2
            className="font-semibold text-accent text-2xl"
            style={{
              fontSize: "1.5rem",
            }}
          >
            {price.currency || "Ksh"} {price.amount}
          </h2>
        </div>

        <div className="mt-4">
          <ParentDetails />
        </div>
        <div className="mt-6">
          <AddToCartButton idStr={JSON.stringify({ id: slug })} />
        </div>

        <div className="mt-4 border-spacing-7">
          <SocialShare shareUrl={`https://example.com/${slug}`} name={name} />
        </div>
      </div>
    </div>
  );
};

export default page;
