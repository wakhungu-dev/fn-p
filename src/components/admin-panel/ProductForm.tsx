"use client";

import { setLoading } from "@/redux/features/loadingSlice";
import { useAppDispatch } from "@/redux/hooks";
import { Iproduct } from "@/types/core";
import { makeToast } from "@/utils/helper";
import { UploadButton } from "@/utils/uploadthing";
import axios from "axios";
import Image from "next/image";
import React, { FormEvent, useState } from "react";

interface Ipayload extends Iproduct {
  
}
const defaultPayload: Ipayload = {
  imgSrc: "",
  fileKey: "",
  name: "",
  category: "",
  price: { amount: 0, currency: "ksh" },
  quantity: 1,
  reviews: {
    rating: 0,
    count: 0,
  },  
  }

const ProductForm = () => {
  const [payload, setPayload] = useState<Ipayload>(defaultPayload);

  const dispatch = useAppDispatch();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Validate payload before sending the request
    if (
      !payload.name ||
      !payload.category ||
      !payload.price ||
      !payload.imgSrc ||
      !payload.fileKey
    ) {
      makeToast("Please fill all the fields and upload an image");
      return;
    }

    dispatch(setLoading(true));
    try {
      const response = await axios.post("/api/products", payload);
      makeToast("Product added successfully");
      setPayload(defaultPayload);
    } catch (err) {
      console.error("Error adding product:", err);
      makeToast("Error adding product");
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <Image
        className="max-h-[300px] w-auto object-contain rounded-md"
        src={payload.imgSrc ? payload.imgSrc : "/placeholder.jpg"}
        alt="Product Image"
        width={800}
        height={500}
      />
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          if (res && res.length > 0) {
            setPayload({
              ...payload,
              imgSrc: res[0].url,
              fileKey: res[0].key,
            });
          }
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          alert(`ERROR! ${error.message}`);
        }}
      />
      <div>
        <label className="block ml-1">Product Name</label>
        <input
          className="bg-gray-300 w-full
                    px-4 py-2 border outline-pink rounded-md"
          type="text"
          value={payload.name}
          onChange={(e) => setPayload({ ...payload, name: e.target.value })}
          required
        />
      </div>
      <div>
        <label className="block ml-1">Product Category</label>
        <input
          className="bg-gray-300 w-full
                    px-4 py-2 border outline-pink rounded-md"
          type="text"
          value={payload.category}
          onChange={(e) => setPayload({ ...payload, category: e.target.value })}
          required
        />
      </div>
      <div>
        <label className="block ml-1">Product Price</label>
        <input
          className="bg-gray-300 w-full
                    px-4 py-2 border outline-pink rounded-md"
          type="text"
          value={payload.price.amount}
          onChange={(e) => setPayload({ ...payload, price:{...payload.price,amount:+e.target.value} })}
          required
        />
      </div>
      <div className="flex justify-end">
        <button className="bg-pink text-white px-4 py-2 rounded-md">
          Add Product
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
