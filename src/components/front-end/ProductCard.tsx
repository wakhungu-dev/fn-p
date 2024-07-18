/**
 * Represents a product card component.
 */
import { AiFillStar, AiOutlineStar, AiOutlineShoppingCart } from 'react-icons/ai';
import toast from 'react-hot-toast';
import { useAppDispatch } from '@/redux/hooks';
import { Iproduct } from '@/types/core';
import { addToCart } from '@/redux/features/cartSlice';
import Image from 'next/image';

/**
 * Props for the ProductCard component.
 */
interface PropsType {
    product: string;
}

/**
 * Renders a product card.
 * @param {PropsType} props - The component props.
 * @returns {JSX.Element} The rendered product card.
 */
const ProductCard = ({
    product
}: PropsType) => {
    const { _id, imgSrc, category, name, price, fileKey, reviews } = JSON.parse(product) as Iproduct;
    const dispatch = useAppDispatch();

    /**
     * Adds the product to the cart.
     */
    const addProductToCart = () => {
        const payload: Iproduct & { quantity: number } = {
            _id, imgSrc, category, name, price, quantity: 1, fileKey, reviews // Include reviews in the payload
        };
        dispatch(addToCart(payload));
        toast.success('Added to cart');
    };

    /**
     * Renders the star rating.
     * @param {number} rating - The rating value.
     * @returns {JSX.Element[]} The rendered star icons.
     */
    const renderStars = (rating: number) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(<AiFillStar key={i} />);
            } else {
                stars.push(<AiOutlineStar key={i} />);
            }
        }
        return stars;
    };

    return (
        <div className='group border border-gray-200 rounded-md shadow-md transition-shadow transform duration-300 hover:shadow-lg hover:scale-105'>
            <div className='text-center border-b border-gray-200'>
                <Image src={imgSrc} alt={name} width={100} height={100} />
            </div>
            <div className='px-8 py-4'>
                <p className='text-gray-500 text-[14px] font-medium'>{category}</p>
                <h2 className='font-medium'>{name}</h2>
                <div className='mt-3 flex text-[#FFA500] items-center'>
                    {reviews && reviews.rating > 0 ? (
                        renderStars(reviews.rating)
                    ) : (
                        <p className='text-gray-600 text-[14px] ml-2'>No reviews yet</p>
                    )}
                    {reviews && reviews.rating > 0 && (
                        <p className='text-gray-600 text-[14px] ml-2'>({reviews.count} reviews)</p>
                    )}
                </div>
                <div className='flex gap-2 items-center mt-4'>
                    <h2 className='font-medium text-accent text-xl'>
                        {price?.currency || 'ksh'}. {price?.amount}
                    </h2>
                </div>
                <div className='hidden group-hover:flex gap-2 items-center rounded-md bg-pink text-white px-4 py-2 cursor-pointer hover:bg-accent'
                    onClick={addProductToCart}>
                    <AiOutlineShoppingCart />
                    <p className='group-hover:text-black'>Add to cart</p>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
