export const revalidate = 60;
import React, { useEffect,FC, useState } from 'react';
import ProductCard from './ProductCard';
import { Iproduct } from '@/types/core';
import { mongoDbConnection } from '@/libs/mongoDb';
import Product from '@/libs/models/product';

const getProducts = async () => {
    await mongoDbConnection();
    const data = await Product.find({});
    // console.log(data);
    return data;
    
    }

type PropsType  = {
    // products: Iproduct[]
};

const TrendingProduct: FC<PropsType> = async () => {
    const products: Iproduct[]  = await getProducts() as unknown as Iproduct[];


    
    if (!products || products.length === 0) {
        return <div>Loading...</div>; // Placeholder for loading state
    }

    return (
        <div className='container mt-32'>
            <div className='sm:flex justify-between items-center'>
                <h2 className='font-bold text-lg '>Trending Products</h2>
                <div className='text-gray-500 flex gap-4 text-xl mt-4 sm:mt-0'>
                    <div className='cursor-pointer'>New</div>
                    <div>Featured</div>
                    <div>Best Seller</div>
                </div>
            </div>

            <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8'>
                {Array.isArray(products)? products.map((item: Iproduct) => (
                    <ProductCard
                        key={item._id}
                        product={item} // Ensure key is unique
                    />
                )): null}
            </div>
        </div>
    );
}

export default TrendingProduct;
