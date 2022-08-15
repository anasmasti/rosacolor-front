import React from 'react'
import MainTitle from '../../shared/MainTitle'
import Title from '../../shared/Title'
import ProductCategory from './ProductCategory'

export default function ProductCategoryCards() {
  return (
    <div className='mt-24' id='categories'>
      <MainTitle value='Nos Categories' styleClass={`
          text-center
          md:text-2xl
          sm:text-2xl
          lg:text-4xl`}/>
      <div className=''>
      <ProductCategory/>
      </div>
    </div>
  )
}
