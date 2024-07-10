import { removeFromCart } from '@/redux/features/cartSlice'; // Ensure this is a named import
import { useAppDispatch } from '@/redux/hooks';
import { RxCross1 } from 'react-icons/rx';
import Image from 'next/image'; // Ensure this import is correct

interface PropsType {
    _id: string;
    Image: string;
    title: string;
    price: number;
    quantity: number;
}

const CartProduct: React.FC<PropsType> = ({
    _id, Image: imageSrc, title, price, quantity }) => {
    
    const dispatch = useAppDispatch();
    return (
        <div className='flex justify-between items-center'>
            <div className='flex items-center gap-4'>
                <Image className='w-[80px]' src={imageSrc} alt={title} width={80} height={80} />
                <div className='space-y-2'>
                    <h3 className='font-medium'>{title}</h3>
                    <p className='text-gray-600 text-[14px]'>{quantity} * ${price}.00</p>
                </div>
            </div>
            <RxCross1
                className='cursor-pointer'
                onClick={() => dispatch(removeFromCart(_id))}
            />
        </div>
    );
}

export default CartProduct;
