import React from 'react'
import MainTitle from '../../shared/MainTitle'
import Title from '../../shared/Title'
import ProductCategory from './ProductCategory'

export default function ProductCategoryCards() {
  return (
    <div>
      <Title src='images/productcategory/bg.png' value1='nos produits' value2='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil commodi corporis tempore nesciunt iste ad hic cupiditate exercitationem incidunt molestiae illum cumque fuga harum, eveniet quasi, dolore alias ipsa vero.'/>
     {/* <span className="block mb-4 text-base text-primary font-semibold">
        Our Products
      </span>*/}
      <MainTitle value='step 1: Choose A Category' styleClass={`
          ml-20
          md:text-2xl
          sm:text-2xl
          lg:text-4xl`}/>
      <div className='m-14'>
      <ProductCategory/>
      </div>
    </div>
  )
}
