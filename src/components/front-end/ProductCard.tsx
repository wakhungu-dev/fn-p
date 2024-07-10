import { AiFillStar, AiOutlineStar, AiOutlineShoppingCart } from 'react-icons/ai';
import toast from 'react-hot-toast';
import { useAppDispatch } from '@/redux/hooks';
import { addToCart } from '@/redux/features/cartSlice';
import Image from 'next/image';
import { Iproduct } from '@/types/core';

interface PropsType extends Iproduct {
   
}

const ProductCard = ({
    _id,imgSrc , category, name, price,fileKey
}: PropsType) => {
    const dispatch = useAppDispatch();

    const addProductToCart = () => {
        const payload: Iproduct &{quantity:number} = {
           _id, imgSrc, category, name, price, quantity: 1, fileKey
        };
        dispatch(addToCart(payload));
        toast.success('Added to cart');
    };

    return (
        <div className='border border-gray-200'>
            <div className='text-center border-b border-gray-200'>
                <Image src={imgSrc} alt={name} width={100} height={100} />
            </div>
            <div className='px-8 py-4'>
                <p className='text-gray-500 text-[14px] font-medium'>{category}</p>
                <h2 className='font-medium'>{name}</h2>
                <div className='mt-3 flex text-[#FFA500] items-center'>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                    <p className='text-gray-600 text-[14px] ml-2'>(3 reviews)</p>
                </div>
                <div className='flex gap-2 items-center mt-4'>
                    <h2 className='font-medium text-accent text-xl'>${price.amount} {price.currency||'ksh'}</h2>
                    <div
                        className='flex gap-2 items-center bg-pink text-white px-4 py-2 cursor-pointer hover:bg-accent'
                        onClick={addProductToCart}
                    >
                        <AiOutlineShoppingCart />
                        <p>Add to cart</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
