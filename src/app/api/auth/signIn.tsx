// // pages/auth/signin.tsx

// import { signIn, getProviders, useSession } from 'next-auth/react';
// import { GetServerSideProps } from 'next';
// import Link from 'next/link';

// const SignIn = ({ providers }: any) => {
//     const { data: session } = useSession();

//     if (session) {
//         return (
//             <div>
//                 <p>You are already signed in.</p>
//                 <Link href="/">Go to Home</Link>
//             </div>
//         );
//     }

//     return (
//         <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
//             <h1 className="text-3xl font-bold mb-6">Sign In</h1>
//             <div className="w-full max-w-md">
//                 <form
//                     onSubmit={async (e) => {
//                         e.preventDefault();
//                         const email = (e.target as any).email.value;
//                         const password = (e.target as any).password.value;
//                         await signIn('credentials', {
//                             email,
//                             password,
//                             callbackUrl: '/',
//                         });
//                     }}
//                     className="bg-white p-8 shadow-lg rounded-lg"
//                 >
//                     <input
//                         type="email"
//                         name="email"
//                         placeholder="Email"
//                         className="w-full p-2 mb-4 border border-gray-300 rounded"
//                         required
//                     />
//                     <input
//                         type="password"
//                         name="password"
//                         placeholder="Password"
//                         className="w-full p-2 mb-4 border border-gray-300 rounded"
//                         required
//                     />
//                     <button
//                         type="submit"
//                         className="w-full py-2 bg-blue-600 text-white rounded"
//                     >
//                         Sign In
//                     </button>
//                 </form>
//                 <div className="mt-4">
//                     {providers && Object.values(providers).map((provider: any) => (
//                         <button
//                             key={provider.name}
//                             onClick={() => signIn(provider.id)}
//                             className="w-full py-2 bg-red-600 text-white rounded mb-2"
//                         >
//                             Sign In with {provider.name}
//                         </button>
//                     ))}
//                 </div>
//                 <Link href="/auth/signup">
//                     <a className="mt-4 text-blue-600">Don't have an account? Sign Up</a>
//                 </Link>
//             </div>
//         </div>
//     );
// };

// export const getServerSideProps: GetServerSideProps = async () => {
//     const providers = await getProviders();
//     return {
//         props: { providers },
//     };
// };

// export default SignIn;
