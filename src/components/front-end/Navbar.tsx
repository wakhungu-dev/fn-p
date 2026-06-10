import React, { Dispatch, SetStateAction } from "react";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import { AppDispatch } from "@/redux/store";
import {
  resetFilters,
  setCategory,
  setSearchQuery,
} from "@/redux/features/productsSlice";
import Spinner from "../admin-panel/Loader";
import Logo from "../Logo";

interface PropsType {
  setShowCart: Dispatch<SetStateAction<boolean>>;
}

const Navbar = ({ setShowCart }: PropsType) => {
  const cartCount = useAppSelector((state) => state.cart.items.length);
  const { user, isLoaded } = useUser();
  const dispatch: AppDispatch = useAppDispatch();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(e.target.value));
  };

  // const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //     dispatch(setCategory(e.target.value));
  // };

  // const handleResetFilters = () => {
  //     dispatch(resetFilters());
  // };

  return (
    <div className="pt-4 bg-white top-0 sticky z-10">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="text-4xl font-bold">
            <Logo />
          </div>
          {/* Search form */}
          <form
            className="lg:flex hidden w-full max-w-[500px]"
            // onSubmit={handleSearch}
          >
            <input
              type="text"
              placeholder="Search for products..."
              onChange={handleSearch}
              className="w-full border-2 border-accent px-6 py-2"
            />
          </form>
          {/* User account and cart */}
          <div className="flex gap-4 md:gap-8 items-center">
            {/* User account */}
            <div className="md:flex hidden gap-3">
              {!isLoaded ? (
                <Spinner />
              ) : user ? (
                <>
                  <div className="rounded-full border-2 border-gray-300 text-gray-500 text-[24px] md:text-[32px] w-[40px] h-[40px] md:w-[50px] md:h-[50px] grid place-items-center overflow-hidden">
                    {user.imageUrl ? (
                      <Image
                        src={user.imageUrl}
                        alt={user.fullName ?? "User"}
                        width={50}
                        height={50}
                      />
                    ) : (
                      <AiOutlineUser />
                    )}
                  </div>
                  <div>
                    <p className="text-gray-500">Hello, {user.fullName ?? user.firstName ?? "User"}</p>
                    <SignOutButton>
                      <button className="font-medium">Sign Out</button>
                    </SignOutButton>
                  </div>
                </>
              ) : (
                <SignInButton>
                  <button className="rounded-full border-2 border-gray-300 text-gray-500 text-[32px] w-[50px] h-[50px] grid place-items-center">
                    <AiOutlineUser />
                  </button>
                </SignInButton>
              )}
            </div>
            {/* Cart */}
            <div
              className="text-gray-500 text-[32px] relative cursor-pointer"
              onClick={() => setShowCart(true)}
            >
              <AiOutlineShoppingCart />
              {/* Cart count */}
              <div className="absolute top-[-15px] right-[-10px] bg-red-600 text-white w-[18px] h-[18px] text-lg rounded-full flex items-center  justify-center">
                {cartCount}
              </div>
            </div>
          </div>
        </div>
        <div className="border-b border-gray-200 pt-4" />
      </div>
      {/* Product list */}
      {/* <ProductList products={products} searchQuery={searchQuery} /> */}
    </div>
  );
};

export default Navbar;
