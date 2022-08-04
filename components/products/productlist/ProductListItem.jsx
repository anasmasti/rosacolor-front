import React from 'react'
import PropTypes from "prop-types";
import MainButton from '../../shared/MainButton';

export default function ProductListItem({title, description, src,btn}) {
  
  return (
<div className="flex">
  <div className="block rounded-lg shadow-lg bg-white max-w-xs text-center">
  <img className="
              relative
              left-16
              p-6 
              hover:scale-110
              duration-300
              h-52
              w-44
              " 
      src= {src} />
      
    <h5 className="text-white
    p-2 w-full
                text-lg
                leading-tight 
                font-medium 
                mb-2
                bg-red-500">
        {title}
    </h5>
<div className="p-6">
    <p className="text-gray-700
              text-sm
              mb-4">
      {description}
    </p>
    <div>
      <MainButton value='See more' styleClass={"w-auto"} /> 
    </div>
    </div>
  </div>
</div>
  )
}
ProductListItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  href: PropTypes.string,
};
