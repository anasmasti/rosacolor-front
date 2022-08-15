import React from "react";

const Title = ({src, value1,value2,alt}) => {
  return (
   
      <div className="relative text-center text-white">
        <img
          src={src}
          alt={alt}
          className='h-[350px] object-cover w-full'
        />
        <h1 className="text-3xl absolute text-center top-1/2 w-full uppercase font-light tracking-widest underline underline-offset-8 decoration-red-500">
          {value1}
        </h1>
        <span className="md:max-h-12 overflow-hidden text-sm absolute top-2/3 inset-x-2 text-center w-full">
         {value2}
        </span>
      </div>
   
  );
};

export default Title;
