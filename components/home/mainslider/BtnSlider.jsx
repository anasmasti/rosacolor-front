import React from "react";
import { BsArrowLeftCircle } from "react-icons/Bs";
import { BsArrowRightCircle } from "react-icons/Bs";

const BtnSlider = ({ direction, moveSlide }) => {
  console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
        <img src={direction === "next" ? BsArrowLeftCircle : BsArrowRightCircle} />

    </button>
  );
};

export default BtnSlider;
