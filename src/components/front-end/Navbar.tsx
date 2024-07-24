import React, { Dispatch, SetStateAction, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineUser, AiOutlineShoppingCart } from 'react-icons/ai';
import { useAppSelector } from '@/redux/hooks';
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';

interface PropsType {
    setShowCart: Dispatch<SetStateAction<boolean>>;
}

const Navbar = ({ setShowCart }: PropsType) => {
    const [searchQuery, setSearchQuery] = useState('');
    const cartCount = useAppSelector((state) => state.cart.items.length);
    const { data: session, status } = useSession();

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Search query:', searchQuery);
    };

    return (
        <div className='pt-4 bg-white top-0 sticky'>
            <div className='container'>
                <div className='flex justify-between items-center'>
                    <div className='text-4xl font-bold'>
                        Lynrose
                    </div>
                    {/* Search form */}
                    <form
                        className='lg:flex hidden w-full max-w-[500px]'
                        onSubmit={handleSearchSubmit}
                    >
                        <input
                            type='text'
                            placeholder='Search for products...'
                            value={searchQuery}
                            onChange={handleSearchChange}
                            className='w-full border-2 border-accent px-6 py-2'
                        />
                        <button
                            type='submit'
                            className='bg-accent text-white text-[26px] grid place-items-center px-4'
                        >
                            <BsSearch />
                        </button>
                    </form>
                    {/* User account and cart */}
                    <div className='flex gap-4 md:gap-8 items-center'>
                        {/* User account */}
                        <div className='md:flex hidden gap-3'>
                            {status === 'loading' ? (
                                <p>Loading...</p>
                            ) : session ? (
                                <>
                                    <div className='rounded-full border-2 border-gray-300 text-gray-500 text-[32px] w-[50px] h-[50px] grid place-items-center'>
                                       { session?.user?.image? <Image src={session.user.image} alt={session.user.name as string} width={50} height={50}  /> :<AiOutlineUser />}
                                    </div>
                                    <div>
                                        <p className='text-gray-500'>Hello, {session.user?.name}</p>
                                        <button className='font-medium' onClick={() => signOut()}>
                                            Sign Out
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <button className='rounded-full border-2 border-gray-300 text-gray-500 text-[32px] w-[50px] h-[50px] grid place-items-center' onClick={() => signIn()}>
                                    <AiOutlineUser />
                                </button>
                            )}
                        </div>
                        {/* Cart */}
                        <div
                            className='text-gray-500 text-[32px] relative cursor-pointer'
                            onClick={() => setShowCart(true)}
                        >
                            <AiOutlineShoppingCart />
                            {/* Cart count */}
                            <div className='absolute top-[-15px] right-[-10px] bg-red-600 text-white w-[25px] h-[25px] rounded-full flex items-center justify-center'>
                                {cartCount}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='border-b border-gray-200 pt-4' />
            </div>
            {/* Product list */}
            {/* <ProductList products={products} searchQuery={searchQuery} /> */}
        </div>
    );
};

export default Navbar;