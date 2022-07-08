import React from 'react'
import ProductCategory from './ProductCategory'

export default function ProductCategoryCards() {
  return (
    <div className='m-12'>
      <span className="block mb-4 text-base text-primary font-semibold">
        Our Products
      </span>
      <span className='text-dark
                      mb-6
                      uppercase
                      font-bold
                      text-[32px]
                      sm:text-[40px]
                      lg:text-[36px]
                      xl:text-4xl
                      underline decoration-red-500'
      >
        Choose A Category
      </span>
      
      <div>
      <ProductCategory/>
      </div>
    </div>
  )
}
