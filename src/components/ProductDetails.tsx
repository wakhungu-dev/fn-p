"use client";
import type { ProductDetails } from '@/types/core';
import React, { useState } from 'react'; 



const ProductDetails: React.FC<{ sizes: string[] }> = ({ sizes }) => {  
  const [selectedSize, setSelectedSize] = useState<string>('');  

  return (  
    <div>  
      <p className="font-medium text-lg">Available Sizes:</p>  
      <ul className="list-disc pl-5 mt-2">  
        {sizes.map((size, index) => (  
          <li key={index} className="text-gray-600">  
            <input  
              type="radio"  
              name="size"  
              value={size}  
              checked={selectedSize === size}  
              onChange={() => setSelectedSize(size)}  
            />  
            {size}  
          </li>  
        ))}  
      </ul>  
      <p>{selectedSize ? `You selected: ${selectedSize}` : 'Please select a size.'}</p>   
    </div>  
  );  
}  

export default ProductDetails;
