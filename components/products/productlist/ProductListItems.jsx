import data from '../././../data/data.json'
import React from 'react'
import ProductListItem from './ProductListItem'

export default function ProductListItems() {

  return (
    <div className={`p-5 pb-32 static flex flex-col justify-center gap-10 justify-items-center md:flex-row md:space-x-0 md:mt-0 flex-wrap`}>
        {data.map((items) =>
        <ProductListItem key={items.id} {...items} href={items.href}/>
        )}
    </div>
  )
}
