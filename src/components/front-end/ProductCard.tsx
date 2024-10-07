/**
 * Represents a product card component.
 *
 * @component
 * @param {PropsType} props - The props for the component.
 * @param {Iproduct} props.product - The product data.
 * @returns {JSX.Element} The rendered product card.
 */
"use client";

import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Iproduct } from "@/types/core";
import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "../AddToCartButton";

interface PropsType {
  product: Iproduct;
}

const ProductCard = ({ product }: PropsType): JSX.Element => {
  const { _id, imgSrc, category, name, price, fileKey, reviews } = product;

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        i <= rating ? <AiFillStar key={i} /> : <AiOutlineStar key={i} />
      );
    }
    return stars;
  };

  return (
    <div className="bg-inherit border-gray-200 rounded-md shadow-md transition-shadow transform duration-300 hover:shadow-lg hover:scale-105 flex flex-col h-full justify-between">
      {/* Product image */}
      <div className="flex-grow text-center flex items-center justify-center">
        <Link href={`/${_id as string}`}>
          <Image
            src={imgSrc}
            alt={name}
            layout="responsive"
            width={300}
            height={300}
            className="object-cover"
          />
        </Link>
      </div>
      {/* Product details */}
      <div className="px-4 py-4 flex flex-col justify-between h-full">
        {/* Product category */}
        <p className="text-gray-500 text-[14px] font-medium">{category}</p>
        {/* Product name */}
        <h2 className="font-medium">{name}</h2>
        {/* Product rating */}
        <div className="mt-1 flex text-[#FFA500] items-center">
          {reviews && reviews.length > 0 && reviews[0].rating !== undefined ? (
            <>
              {renderStars(reviews[0].rating)}
              <p className="text-gray-600 text-[14px] ml-2">
                ({reviews.length} reviews)
              </p>
            </>
          ) : (
            <p className="text-gray-600 text-[14px] ml-2">No reviews yet</p>
          )}
        </div>
        {/* Product price */}
        <div className="flex gap-2 items-center mt-2">
          <h2 className="font-medium text-accent text-xl">
            {price?.currency || "ksh"}. {price?.amount}
          </h2>
        </div>
        {/* Add to cart button */}
        <AddToCartButton idStr={JSON.stringify({ id: _id })} className="mt-4" />
      </div>
    </div>
  );
};

export default ProductCard;
