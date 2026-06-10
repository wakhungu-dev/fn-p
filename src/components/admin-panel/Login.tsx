"use client"
import { FcGoogle } from "react-icons/fc";
import React from 'react';
import { SignInButton } from "@clerk/nextjs";

const Login: React.FC = () => {
  return (
    <div className="bg-black min-h-screen grid place-items-center">
      <SignInButton>
        <button className="bg-white px-8 py-4 flex gap-2 items-center">
          <FcGoogle size={30} />
          Sign in
        </button>
      </SignInButton>
    </div>
  );
}

export default Login;
