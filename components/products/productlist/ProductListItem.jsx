import React from 'react'
import PropTypes from "prop-types";

export default function ProductListItem({title, description, src}) {
  
  return (
<div className="flex justify-center">
  <div className="block p-6 rounded-lg shadow-lg bg-white max-w-xs">
  <img className="rounded-t-lg
              h-56
              w-52
              mb-4
              " 
      src= {src} />
    <h5 className="text-gray-900 
                text-xl 
                leading-tight 
                font-medium 
                mb-2">
        {title}
    </h5>

    <p className="text-gray-700 
              text-base 
              mb-4">
      {description}
    </p>
    <a className="relative 
                      self-start 
                      inline-block
                      w-auto px-8
                      py-2 mx-auto
                      mt-0 text-base 
                      font-bold text-white
                      bg-red-500 
                      border-t 
                      border-gray-200
                      rounded-md 
                      sm:mt-1 
                      fold-bold 
                      lg:mx-0">
      See More
    </a>
  </div>
</div>
  )
}
ProductListItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  href: PropTypes.string,
};
