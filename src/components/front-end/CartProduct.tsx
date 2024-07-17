"use client";
import React from 'react';
import { useAppDispatch } from '@/redux/hooks';
import { RxCross1 } from 'react-icons/rx';
import Image from 'next/image';
import { Iproduct } from '@/types/core';
import { removeFromCart, incrementQuantity, decrementQuantity } from '@/redux/features/cartSlice';

interface PropsType extends Iproduct {}

const CartProduct: React.FC<PropsType> = ({
    _id, imgSrc, name, price, quantity 
}) => {
    const dispatch = useAppDispatch();

    const handleIncrement = () => {
        dispatch(incrementQuantity(_id as string));
    };

    const handleDecrement = () => {
        dispatch(decrementQuantity(_id as string));
    };

    return (
        <div className='flex justify-between items-center p-4 border-b'>
            <div className='flex items-center gap-4'>
                <Image className='w-[80px]' src={imgSrc} alt={name} width={80} height={80} />
                <div className='space-y-2'>
                    <h3 className='font-medium'>{name}</h3>
                    <p className='text-gray-600 text-[14px]'>{quantity} * Ksh{price.amount}.00</p>
                    <div className='flex items-center space-x-2'>
                        <button onClick={handleDecrement} className='bg-gray-200 p-1 rounded'>-</button>
                        <span>{quantity}</span>
                        <button onClick={handleIncrement} className='bg-gray-200 p-1 rounded'>+</button>
                    </div>
                </div>
            </div>
            <RxCross1
                className='cursor-pointer'
                onClick={() => dispatch(removeFromCart(_id as string))}
            />
        </div>
    );
};

export default CartProduct;
