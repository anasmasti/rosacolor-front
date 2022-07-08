import React from 'react'
import Link from "next/link";
import PropTypes from "prop-types";


export default function ProductCategoryItem({title, src, href}) {
  return (
    <>
      <div className="flex justify-center max-w-sm">
      <Link href={href}>

        <div className="block 
                    p-6 
                    rounded-lg 
                    shadow-lg 
                    bg-white 
                    max-w-lg
                    cursor-pointer">

            <img className="h-40 w-52 rounded-t-lg" src={src}/>
          
            <h5 className="text-gray-900 
                      text-xl 
                      leading-tight 
                      font-medium 
                      p-4
                      text-center">
                  {title}
            </h5>
        </div>
        </Link>
      </div>
    </>
  )
}
ProductCategoryItem.propTypes = {
  title: PropTypes.string,
  href: PropTypes.string,
};
