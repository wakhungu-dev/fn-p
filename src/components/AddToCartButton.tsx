"use client";
import { addToCart } from "@/redux/features/cartSlice";
import { getProductById } from "@/redux/features/productsSlice";
import { useAppDispatch } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { Iproduct } from "@/types/core";
import React from "react";
import toast from "react-hot-toast";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";

interface AddToCartButtonProps {
  idStr: string;
}
const AddToCartButton = ({ idStr }: AddToCartButtonProps) => {
  const {id} = JSON.parse(idStr)
  const dispatch = useAppDispatch();
  const { filteredProducts, products } = useSelector(
    (state: RootState) => state.products
  );

  const addProductToCart = () => {
    const product = filteredProducts.find((product) => product._id == id);
    console.log({product, filteredProducts, products})
   
if (!product?._id){
  return toast.error("Product not found")
}
    const { _id, imgSrc, category, name, price, fileKey, reviews } = product as Iproduct;
      
    const payload: Iproduct & { quantity: number } = {
      _id,
      imgSrc,
      category,
      name,
      price,
      quantity: 1,
      fileKey,
      reviews: [],
    };
    dispatch(addToCart(payload));
    toast.success("Added to cart");
  };

  return (
    <button
      className="mt-auto flex gap-2 items-center rounded-md bg-yellow-500 text-white px-4 py-2 cursor-pointer hover:bg-green-500 transition-colors"
      onClick={addProductToCart}
      aria-label={`Add ${"product" || ""} to cart`}
    >
      <AiOutlineShoppingCart />
      <p className="group-hover:text-black">Add to cart</p>
    </button>
  );
};

export default AddToCartButton;
