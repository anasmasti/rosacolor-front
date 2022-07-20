import React from 'react'
import MainTitle from '../../shared/MainTitle'
import ProductCategory from './ProductCategory'

export default function ProductCategoryCards() {
  return (
    <div className='m-12'>
      <span className="block mb-4 text-base text-primary font-semibold">
        Our Products
      </span>
      <MainTitle value='Choose A Category' styleClass={'mx-0'}/>
      <div>
      <ProductCategory/>
      </div>
    </div>
  )
}
