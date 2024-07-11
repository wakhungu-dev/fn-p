import { setLoading } from "@/redux/features/loadingSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { makeToast } from "@/utils/helper";
import axios from "axios";
import React, { Dispatch, FormEvent } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

interface propsType {
  setOpenPopup: Dispatch<React.SetStateAction<boolean>>;
  setUpdateTable: Dispatch<React.SetStateAction<boolean>>;
}

const Popup = ({ setOpenPopup, setUpdateTable }: propsType) => {
  const productData = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();

  const [inputData, setInputData] = React.useState({
    name: productData.name,
    category: productData.category,
    price: productData.price,
  });
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(setLoading(true));
    axios
      .put(`/api/edit_product/${productData._id}`, inputData)
      .then((res) => {
        makeToast("Product updated successfully");
        setUpdateTable((prevState) => !prevState);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        dispatch(setLoading(false));
        setOpenPopup(false);
      });
  };
  return (
    <div
      className="fixed top-0 left-0 w-full h-screen bg-[#00000070] grid 
    place-items-center"
    >
      <div
        className="bg-white w-[700px] py-8
        rounded-lg text-center relative"
      >
        <IoIosCloseCircleOutline
          className=" absolute top-0 right-0 text-2xl cursor-pointer hover:text-red-600"
          onClick={() => setOpenPopup(false)}
        />
        <h2 className="text-2xl">Edit Product</h2>
        <form className="mt-6 w-fit space-y-4 mx-auto" onSubmit={handleSubmit}>
          <input
            className="border block border-gray-500 p-2 rounded-lg w-fit"
            type="text"
            placeholder="Name"
            value={inputData.name}
            onChange={(e) =>
              setInputData({ ...inputData, name: e.target.value })
            }
            required
          />
          <input
            className="border block border-gray-500 p-2 rounded-lg w-fit"
            type="text"
            placeholder="category"
            value={inputData.category}
            onChange={(e) =>
              setInputData({ ...inputData, category: e.target.value })
            }
            required
          />
          <input
            className="border block border-gray-500 p-2 rounded-lg w-fit"
            type="number"
            placeholder="price"
            value={inputData.price.amount}
            onChange={(e) =>
              setInputData({
                ...inputData,
                price: { ...inputData.price, amount: +e.target.value },
              })
            }
            required
          />

          <button className="bg-accent text-white px-8 py-2 rounded-lg self-center">
            save
          </button>
        </form>
      </div>
    </div>
  );
};

export default Popup;
