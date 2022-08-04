import React from "react";

const Title = ({src, value1,value2}) => {
  return (
    <div>
      <div className="relative text-center text-white">
        <img
          src={src}
          style={{ width: "100%" }}
        />
        <h1 className="md:text-lg sm:text-lg absolute top-1/2 text-center w-full uppercase lg:text-3xl font-light tracking-widest underline underline-offset-8 decoration-red-500">
          {value1}
        </h1>
        <span className="md:max-h-12 whitespace-nowrap md:text-ellipsis sm:text-ellipsis overflow-hidden lg:text-md absolute top-3/4 inset-x-2 text-center w-full">
         {value2}
        </span>
      </div>
    </div>
  );
};

export default Title;
