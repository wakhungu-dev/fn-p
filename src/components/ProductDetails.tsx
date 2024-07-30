"use client";
import React, { useState } from 'react'; 

interface ProductDetailsProps {
    sizes: string[];
    }

const ProductDetails: React.FC<ProductDetailsProps> = () => {  
  const sizes = ["Small", "Medium", "Large", "XL", "2XL"];  
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
      <p>You selected: {selectedSize}</p>   
    </div>  
  );  
}  

export default ProductDetails;