import React from 'react'
import ProductCategoryItem from './ProductCategoryItem'

export default function ProductCategory() {
    const list = [
        {
            id:1,
            title:"Category1",
            src:"/images/productcategory/category1.jpg",
            href:"/products/productlist"
        },
        {
            id:2,
            title:"Category2",
            src:"/images/productcategory/category1.jpg",
            href:"/products/productlist"

        },
        {
            id:3,
            title:"Category3",
            src:"/images/productcategory/category1.jpg",
            href:"/products/productlist"

        },
        {
            id:4,
            title:"Category4",
            src:"/images/productcategory/category1.jpg",
            href:"/products/productlist"

        }
    ]
  return (
    <div className={`p-5 pb-32 static flex flex-col justify-center gap-10 justify-items-center md:flex-row md:space-x-0 md:mt-0`}>
        {list.map((item)=>(
            <ProductCategoryItem key={item.id} {...item} href={item.href}/>
        ))}
    </div>
  )
}
