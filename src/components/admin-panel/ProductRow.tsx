import { setLoading } from "@/redux/features/loadingSlice";
import { setProduct } from "@/redux/features/productSlice";
import { useAppDispatch } from "@/redux/hooks";
import { Iproduct } from "@/types/core";
import { makeToast } from "@/utils/helper";
import axios from "axios";
import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";

interface PropsType {
  SrNo: number;
  setOpenPopup: Dispatch<SetStateAction<boolean>>;
  setUpdateTable: Dispatch<SetStateAction<number>>;
  product: Iproduct;
}

const ProductRow: React.FC<PropsType> = ({
  SrNo,
  setOpenPopup,
  setUpdateTable,
  product,
}) => {
  const dispatch = useAppDispatch();

  const onEdit = () => {
    dispatch(setProduct(product));
    setOpenPopup(true);
  };

  const onDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this product?")) {
      return;
    }
  
    dispatch(setLoading(true));
  
    try {
      // Delete image first
      const imageRes = await axios.delete("/api/uploadthing", {
        data: { fileKey: product.fileKey }
      });
      
      if (!imageRes.data.success) {
        throw new Error("Image deletion failed");
      }
  
      // Delete product
      const productRes = await axios.delete(`/api/product/${product._id}`);
      
      if (!productRes.data.success) {
        throw new Error("Product deletion failed");
      }
  
      makeToast("success", "Product deleted successfully");
      
      // Force refresh using counter instead of toggle
      setUpdateTable((prev) => prev + 1);
    } catch (error) {
      console.error("Deletion error:", error);
      const errorMessage = error instanceof Error ? error.message : "Deletion failed";
      makeToast("failed", errorMessage);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <tr>
      <td>
        <div>{SrNo}</div>
      </td>
      <td>
        <div>{product.name}</div>
      </td>
      <td>
        <div>{product.price.amount}</div>
      </td>
      <td className="py-2">
        <Image src={product.imgSrc} width={40} height={40} alt="product_img" />
      </td>
      <td>
        <div className="text-2xl flex items-center gap-2 text-gray-600">
          <CiEdit
            onClick={onEdit}
            className="cursor-pointer hover:text-blue-950"
          />
          <RiDeleteBin5Line
            onClick={onDelete}
            className="cursor-pointer hover:text-red-600"
          />
        </div>
      </td>
    </tr>
  );
};

export default ProductRow;
