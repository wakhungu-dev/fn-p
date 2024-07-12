import React, { Dispatch, SetStateAction, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineUser, AiOutlineShoppingCart } from 'react-icons/ai';
import { useAppSelector } from '@/redux/hooks';

interface PropsType {
    setShowCart: Dispatch<SetStateAction<boolean>>;
}

const Navbar = ({ setShowCart }: PropsType) => {
    const [searchQuery, setSearchQuery] = useState('');
    const cartCount = useAppSelector((state) => state.cart.items.length); // Assuming state.cart is correct

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Perform the search logic here, for example, redirecting to a search results page or filtering products
        console.log('Search query:', searchQuery);
    };

    return (
        <div className='pt-4 bg-white top-0 sticky'>
            <div className='container'>
                <div className='flex justify-between items-center'>
                    <div className='text-4xl font-bold'>
                        Logo
                    </div>
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
                    <div className='flex gap-4 md:gap-8 items-center'>
                        <div className='md:flex hidden gap-3'>
                            <div className='rounded-full border-2 border-gray-300 text-gray-500 text-[32px] w-[50px] h-[50px] grid place-items-center'>
                                <AiOutlineUser />
                            </div>
                            <div>
                                <p className='text-gray-500'>Hello, Sign In</p>
                                <p className='font-medium'>Your Account</p>
                            </div>
                        </div>
                        <div
                            className='text-gray-500 text-[32px] relative cursor-pointer'
                            onClick={() => setShowCart(true)}
                        >
                            <AiOutlineShoppingCart />
                            <div className='absolute top-[-15px] right-[-10px] bg-red-600 text-white w-[25px] h-[25px] rounded-full grid place-items-center'>
                                {cartCount}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='border-b border-gray-200 pt-4' />
            </div>
        </div>
    );
};

export default Navbar;
