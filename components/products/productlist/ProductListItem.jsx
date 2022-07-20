import React from 'react'
import PropTypes from "prop-types";
import MainButton from '../../shared/MainButton';

export default function ProductListItem({title, description, src,btn}) {
  
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
    <div>
      <MainButton value='See more' styleClass={"w-auto"}/> 
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
