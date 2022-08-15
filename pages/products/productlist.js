import React from 'react'
import ProductList from '../../components/products/productlist/ProductList'
import Side from '../../components/products/productlist/Side'
import MainTitle from '../../components/shared/MainTitle'
import Title from '../../components/shared/Title'

export default function productslist() {
  return (
    <div className='bg-gray-50'>

      <Title src='../../../images/productcategory/bg.png' value1='peinture décorative' value2='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil commodi corporis tempore nesciunt iste ad hic cupiditate exercitationem incidunt molestiae illum cumque fuga harum, eveniet quasi, dolore alias ipsa vero.'/>
      <MainTitle value="step 2: choose a product" 
             styleClass={`ml-20
             md:text-2xl
             sm:text-2xl
             lg:text-4xl
             `}/>
            <div className='text-center mb-5'>
              <input type="search" className='form-control w-1/4 p-4' placeholder='Search a product...'/>
            </div>
      <div className="flex flex-row mr-5">
      <div className="basis-1/2">
        <Side/>
      </div>
      <ProductList/>
    </div>
  </div>
  )
}
