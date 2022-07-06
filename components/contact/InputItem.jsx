import React from "react";

const InputItem = ({ placeholder }) => {
  return (
    <>
      <input
        type="text"
        placeholder={placeholder}
        className="mb-6 
                w-full 
                rounded 
                py-3
                px-[14px]
                text-body-color
                text-base
                bg-red-400
                border
                border-red-400
                outline-none
                placeholder-white 
                focus-visible:shadow-none 
                focus:border-white"
      />
    </>
  );
};

export default InputItem;
