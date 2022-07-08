import React from 'react'
import ProductListItem from './ProductListItem'

export default function ProductListItems() {
    const productList=[
        {
            id:1,
            title:"Product1",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae consectetur magni molestias doloribus nisi adipisci minima ullam, nemo excepturi nesciunt!",
            src:"/images/productlist/1.jpg",
            href:"/products/productdetails"
        },
        {
            id:2,
            title:"Product2",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae consectetur magni molestias doloribus nisi adipisci minima ullam, nemo excepturi nesciunt!",
            src:"/images/productlist/2.jpg",
            href:"/products/productdetails"

        },
        {
            id:3,
            title:"Product3",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae consectetur magni molestias doloribus nisi adipisci minima ullam, nemo excepturi nesciunt!",
            src:"/images/productlist/3.jpg",
            href:"/products/productdetails"

        },
        {
            id:4,
            title:"Product4",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae consectetur magni molestias doloribus nisi adipisci minima ullam, nemo excepturi nesciunt!",
            src:"/images/productlist/4.jpg",
            href:"/products/productdetails"

        },
        {
            id:5,
            title:"Product5",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae consectetur magni molestias doloribus nisi adipisci minima ullam, nemo excepturi nesciunt!",
            src:"/images/productlist/5.jpg",
            href:"/products/productdetails"

        },
        {
            id:6,
            title:"Product6",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae consectetur magni molestias doloribus nisi adipisci minima ullam, nemo excepturi nesciunt!",
            src:"/images/productlist/6.jpg",
            href:"/products/productdetails"

        },
        {
            id:7,
            title:"Product7",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae consectetur magni molestias doloribus nisi adipisci minima ullam, nemo excepturi nesciunt!",
            src:"/images/productlist/7.jpg",
            href:"/products/productdetails"

        },
        {
            id:8,
            title:"Product8",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae consectetur magni molestias doloribus nisi adipisci minima ullam, nemo excepturi nesciunt!",
            src:"/images/productlist/8.jpg",
            href:"/products/productdetails"

        },
        {
            id:9,
            title:"Product9",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae consectetur magni molestias doloribus nisi adipisci minima ullam, nemo excepturi nesciunt!",
            src:"/images/productlist/9.jpg",
            href:"/products/productdetails"

        },
        {
            id:10,
            title:"Product10",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae consectetur magni molestias doloribus nisi adipisci minima ullam, nemo excepturi nesciunt!",
            src:"/images/productlist/1.jpg",
            href:"/products/productdetails"

        },
        {
            id:11,
            title:"Product11",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae consectetur magni molestias doloribus nisi adipisci minima ullam, nemo excepturi nesciunt!",
            src:"/images/productlist/2.jpg",
            href:"/products/productdetails"

        },
        {
            id:12,
            title:"Product12",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae consectetur magni molestias doloribus nisi adipisci minima ullam, nemo excepturi nesciunt!",
            src:"/images/productlist/3.jpg",
            href:"/products/productdetails"

        },
    ]
  return (
    <div className={`p-5 pb-32 static flex flex-col justify-center gap-10 justify-items-center md:flex-row md:space-x-0 md:mt-0 flex-wrap`}>
        {productList.map((items) =>
        <ProductListItem key={items.id} {...items} href={items.href}/>
        )}
    </div>
  )
}
