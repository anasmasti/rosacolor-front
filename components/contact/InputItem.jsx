import React from "react";


const InputItem = ({ placeholder,type }) => {
  return (
    <>
      <input
        required
        type={type}
        placeholder={placeholder}
        className="mb-6
                w-full
                py-3
                px-[14px]
                text-body-color
                text-base
                outline-none
                "
      />
    </>
  );
};

export default InputItem;
