import React from 'react'
import ProductDetails from './ProductDetails'

const ParentDetails = () => {
    const availableSizes = ['S', 'M', 'L', 'XL', 'XXL']
  return (
    <div>
      <div>Product Information</div>
      <ProductDetails sizes={availableSizes} />
    </div>
  )
}

export default ParentDetails