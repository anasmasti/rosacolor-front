import React from 'react'
import ProductListItems from './ProductListItems'

export default function ProductList() {
  return (
    <div className=''>
      <h1 className='m-12
                      text-dark
                      mb-6
                      uppercase
                      font-bold
                      text-[32px]
                      sm:text-[40px]
                      lg:text-[36px]
                      xl:text-4xl
                      underline decoration-red-500'
      >
        Products List
      </h1>
      
      <ProductListItems/>
    </div>
  )
}
