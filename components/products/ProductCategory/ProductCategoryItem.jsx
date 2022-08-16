import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";

export default function ProductCategoryItem({
  title,
  src,
  href,
  bgcolor,
  color,
}) {
  return (
    <div className="flex justify-center mt-10">
      <Link href={href}>
        <div
          className="block
                    rounded-lg 
                    shadow-lg
                    cursor-pointer
                    grayscale
                    duration-700
                    hover:grayscale-0"
        >
          <img className="h-96" src={src} />

          <h5
            className={`
                      text-xl 
                      leading-tight 
                      font-medium 
                      p-4
                      text-center
                      text-white
                      bg-red-500
                      `}
          >
            {title}
          </h5>
        </div>
      </Link>
    </div>
  );
}

ProductCategoryItem.propTypes = {
  title: PropTypes.string,
  href: PropTypes.string,
};
