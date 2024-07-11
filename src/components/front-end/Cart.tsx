import React from 'react';
import { RxCross1 } from 'react-icons/rx';
import { useAppSelector } from '@/redux/hooks';
import CartProduct from '@/components/front-end/CartProduct';
import { Iproduct } from '@/types/core';

interface PropsType {
    setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
}

const Cart: React.FC<PropsType> = ({ setShowCart }) => {
    const {items: products} = useAppSelector((state) => state.cart);

    const getTotal = () => {
        let total = 0;
        products.forEach((item: Iproduct) => {
            total += item.price.amount * item.quantity as number;
        });
        return total;
    };

    return (
        <div className='bg-[#0000007d] w-full min-h-screen fixed left-0 top-0 z-20 overflow-y-scroll'>
            <div className='max-w-[400px] w-full bg-white absolute right-0 top-0 p-6'>
                <RxCross1
                    className='absolute right-0 top-0 m-6 text-[24px] cursor-pointer'
                    onClick={() => setShowCart(false)}
                />
                <h3 className='pt-6 text-lg font-medium text-gray-600 uppercase'>Your Cart</h3>
                <div className='mt-6 space-y-2'>
                    {products?.map((item:any) => (
                        <CartProduct
                            key={item._id}
                            {...item}
                        />
                    ))}
                </div>
                <div className='flex justify-between items-center font-medium text-xl py-4'>
                    <p>Total:</p>
                    <p>${getTotal()}.00</p>
                </div>
                <button className='bg-black text-white text-center w-full rounded-3xl py-2 hover:bg-accent mb-4 mt-4'>
                    View cart
                </button>
                <button className='bg-black text-white text-center w-full rounded-3xl py-2 hover:bg-accent'>
                    Checkout
                </button>
            </div>
        </div>
    );
};

export default Cart;
