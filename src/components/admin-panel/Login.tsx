import { FcGoogle } from "react-icons/fc";
import React from 'react';
import { signIn } from "next-auth/react";

const Login: React.FC = () => {
  return (
    <div className="bg-black min-h-screen grid place-items-center">
      <button className="bg-white px-8 py-4 flex gap-2 items-center" onClick={() => signIn('google')}>
        <FcGoogle size={30} />
        Sign in with Google
      </button>
    </div>
  );
}

export default Login;
