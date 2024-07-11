"use client";
import { useAppDispatch } from '@/redux/hooks';
import { RxCross1 } from 'react-icons/rx';
import Image from 'next/image'; // Ensure this import is correct
import { Iproduct } from '@/types/core';
import { removeFromCart } from '@/redux/features/cartSlice';

interface PropsType extends Iproduct{}

const CartProduct: React.FC<PropsType> = ({
    _id,  imgSrc, name, price, quantity }) => {
    
    const dispatch = useAppDispatch();
    return (
        <div className='flex justify-between items-center'>
            <div className='flex items-center gap-4'>
                <Image className='w-[80px]' src={imgSrc} alt={name} width={80} height={80} />
                <div className='space-y-2'>
                    <h3 className='font-medium'>{name}</h3>
                    <p className='text-gray-600 text-[14px]'>{quantity} * ${price.amount}.00</p>
                </div>
            </div>
            <RxCross1
                className='cursor-pointer'
                onClick={() => dispatch(removeFromCart(_id as string))}
            />
        </div>
    );
}

export default CartProduct;
