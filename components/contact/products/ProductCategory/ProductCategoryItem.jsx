import React from 'react'

export default function ProductCategoryItem({title, src}) {
  return (
    <>
      <div className="flex justify-center max-w-sm">
        <div className="block 
                    p-6 
                    rounded-lg 
                    shadow-lg 
                    bg-white 
                    max-w-lg">

          <a href=""><img className="h-40 w-52 rounded-t-lg" src={src}/></a>
          <h5 className="text-gray-900 
                    text-xl 
                    leading-tight 
                    font-medium 
                    p-4
                    text-center">
                {title}
          </h5>
        </div>
      </div>

    </>
  )
}
