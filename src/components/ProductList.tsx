import { Iproduct } from '@/types/core';
import React from 'react';



interface ProductListProps {
    products: Iproduct[];
    searchQuery: string;
}

export const ProductList = ({ products }: ProductListProps) => {
    if (products.length === 0) {
        return <div>No products found</div>;
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {products.map((product) => (
                <div key={product._id} className='border p-4'>
                    <h2 className='text-lg font-bold'>{product.name}</h2>
                    <p>${product.price.amount}</p>
                    {/* Add other product details as needed */}
                </div>
            ))}
        </div>
    );
};

