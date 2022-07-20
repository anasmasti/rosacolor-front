import React from "react";


const InputItem = ({ placeholder,type }) => {
  return (
    <>
      <input
        required
        type={type}
        placeholder={placeholder}
        className="mb-4
                w-full
                py-3
                outline-none
                focus:border-red-500
                "
      />
    </>
  );
};

export default InputItem;
