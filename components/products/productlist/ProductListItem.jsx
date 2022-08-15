import React from "react";
import PropTypes from "prop-types";
import MainButton from "../../shared/MainButton";
import Link from "next/link";

export default function ProductListItem({ id, title, description, src, btn }) {
  return (
    <Link href={"/products/product" + id}>
      <div className="relative rounded-xl shadow-md bg-white">
        <img
          className="object-cover object-center h-[300px] w-full"
          src={src}
        />

        <div className="p-6 flex justify-between ">
          <div className="flex-row justify-start">
            <p className="text-2xl font-bold">{title}</p>
            <p
              className="text-gray-700
              text-sm self-start"
            >
              {title}
            </p>
          </div>
          <div>
            <button className="p-3 bg-gray-100">Voir</button>
          </div>
        </div>
      </div>
    </Link>
  );
}
ProductListItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  href: PropTypes.string,
};
