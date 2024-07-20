import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const SignIn = () => {
  const router = useRouter();
  const { data: session } = useSession();

  if (session) {
    router.push('/');
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-2xl font-bold mb-4">Sign In</div>
      <div className="space-y-4">
        <button
          onClick={() => signIn('google')}
          className="bg-blue-500 text-white p-2 rounded-lg"
        >
          Sign in with Google
        </button>
        <button
          onClick={() => signIn('email')}
          className="bg-gray-500 text-white p-2 rounded-lg"
        >
          Sign in with Email
        </button>
      </div>
    </div>
  );
};

export default SignIn;
