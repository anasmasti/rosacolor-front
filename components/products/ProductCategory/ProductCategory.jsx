import Link from "next/link";
import React from "react";
import ProductCategoryItem from "./ProductCategoryItem";

export default function ProductCategory() {
  const list = [
    {
      id: 1,
      title: "Category1",
      src: "/images/productcategory/1category.jpg",
      href: "/products/productlist",
    },
    {
      id: 2,
      title: "Category2",
      src: "/images/productcategory/2category.png",
      href: "/products/productlist",
    },
    {
      id: 3,
      title: "Category3",
      src: "/images/productcategory/3category.jpg",
      href: "/products/productlist",
    },
    {
      id: 4,
      title: "Category4",
      src: "/images/productcategory/4category.jpg",
      href: "/products/productlist",
    },
    {
      id: 5,
      title: "Category5",
      src: "/images/productcategory/5category.jpg",
      href: "/products/productlist",
    },
    {
      id: 6,
      title: "Category6",
      src: "/images/productcategory/6category.jpg",
      href: "/products/productlist",
    },
    {
      id: 7,
      title: "Category7",
      src: "/images/productcategory/5category.jpg",
      href: "/products/productlist",
    },
    {
      id: 8,
      title: "Category8",
      src: "/images/productcategory/2category.jpg",
      href: "/products/productlist",
    },
  ];

  return (
    <div
      className={`grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 p-2`}
    >
      {list.map((item) => (
        <Link href={"/products/productlist" + item.id}>
          <ProductCategoryItem key={item.id} {...item} href={item.href} />
        </Link>
      ))}
    </div>
  );
}
