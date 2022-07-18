import data from '../././../data/data.json'
import React from 'react'
import ProductListItem from './ProductListItem'
import Link from 'next/link'


export default function ProductListItems() {

  return (
    <div className={`p-5 pb-32 static flex flex-col justify-center gap-10 justify-items-center md:flex-row md:space-x-0 md:mt-0 flex-wrap`}>
        {data.map((items) =>
        <Link href={'/products/product' + items.id}>
          <div className="cursor-pointer">
          <ProductListItem key={items.id} {...items} />
          </div>
        </Link>
        )}

    </div>
  )
}
