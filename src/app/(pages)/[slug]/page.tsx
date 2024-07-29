import AddToCartButton from '@/components/AddToCartButton';
import Product from '@/libs/models/product';
import { mongoDbConnection } from '@/libs/mongoDb';
import Image from 'next/image';
import React from 'react'
const  getProductById = async (id: string) => {
    await mongoDbConnection();
    const product = await Product.findById(id);
    return product;
}
const page = async ({params: {slug}}: any) => {
    
    const {name, category, price, reviews, imgSrc} =  await getProductById(slug);
    if (!name){
        return {
            notFound: true,
        }
    }

  return (

    <div className='group border border-gray-200 rounded-md shadow-md transition-shadow transform duration-300 hover:shadow-lg hover:scale-105 flex flex-col md:flex-row'>
    {/* Product image */}
    <div className='text-center border-b border-gray-200 w-full md:w-1/2 overflow-hidden'>
        
        <Image src={imgSrc} alt={name} width={50} height={50} className=" w-full" />
    </div>
    {/* Product details */}
    <div className='px-4 py-4 flex flex-col w-full md:w-1/2'>
        {/* Product category */}
        <p className='text-gray-500 text-[14px] font-medium'>{category}</p>
        {/* Product name */}
        <h2 className='font-medium'>{name}</h2>
        {/* Product rating */}
        {/* <div className='mt-3 flex text-[#FFA500] items-center'>
            {reviews && reviews.length > 0 && reviews[0].rating !== undefined ? (
                <>
                    {renderStars(reviews[0].rating)}
                    <p className='text-gray-600 text-[14px] ml-2'>({reviews.length} reviews)</p>
                </>
            ) : (
                <p className='text-gray-600 text-[14px] ml-2'>No reviews yet</p>
            )}
        </div> */}
        {/* Product price */}
        <div className='flex gap-2 items-center mt-4'>
            <h2 className='font-medium text-accent text-xl'>
                {price?.currency || 'ksh'}. {price?.amount}
            </h2>
        </div>
        {/* add to cart */}
        <AddToCartButton idStr={JSON.stringify({id: slug})} />
       
    </div>
</div>
    
  )
}

export default page