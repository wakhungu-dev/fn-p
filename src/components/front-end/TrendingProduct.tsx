import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import axios from 'axios';
import { Iproduct } from '@/types/product';

const TrendingProduct = () => {
    const [products, setProducts] = useState<Iproduct[]>([]);

    useEffect(() => {
        axios.get('/api/products')
            .then((res) => {
                console.log(res.data);
                setProducts(res.data);
            })
            .catch((err: any) => console.log(err));
    }, []);

    return (
        <div className='container mt-32'>
            <div className='sm:flex justify-between items-center'>
                <h2>Trending Products</h2>
                <div className='text-gray-500 flex gap-4 text-xl mt-4 sm:mt-0'>
                    <div className='cursor-pointer'>New</div>
                    <div>Featured</div>
                    <div>Best Seller</div>
                </div>
            </div>

            <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8'>
                {products.map((item: Iproduct) => (
                    <ProductCard
                        key={item._id}
                        id={item._id}
                        imgSrc={item.imgSrc}
                        category={item.category}
                        price={item.price}
                    />
                ))}
            </div>
        </div>
    );
}

export default TrendingProduct;
