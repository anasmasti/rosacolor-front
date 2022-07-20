import React from "react";
import Link from "next/link";
import ProductList from "../productlist/ProductList";
import PropTypes from "prop-types";
import data from '../././../data/data.json'
import MainButton from "../../shared/MainButton";
import MainTitle from "../../shared/MainTitle";

export default function ProductDetails() {

  return (
    <div className="mt-12">
      <MainTitle value='Product Details'/>

      <div className="flex justify-center my-12">
        <div className="flex flex-col md:flex-row md:max-w-3xl rounded-lg bg-white shadow-lg">
          <img
            className=" w-full object-cover sm:h-auto md:w-36 rounded-t-lg md:rounded-none md:rounded-l-lg"
            src="/images/productlist/5.jpg"
          />
          
          <div className="p-6 flex flex-col justify-start">
            <h5 className="text-gray-900 text-xl font-medium mb-2">Product Title</h5>
            <p className="text-gray-700 text-base mb-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint nihil, quos vero incidunt, aut numquam distinctio odit harum consequuntur illum voluptatibus culpa recusandae labore earum rem eius magnam sunt provident. Commodi natus praesentium odio a necessitatibus, cupiditate minus aperiam amet magni quia minima reiciendis molestias eum, recusandae quos facilis. Voluptate eum architecto ea totam suscipit explicabo ab delectus? Veniam veritatis hic commodi alias, natus fugiat vitae explicabo voluptatum similique aliquid aspernatur quasi ipsam expedita, cumque facere minima. Nihil, vitae quidem!              <br/>
            </p>
            <hr />
            <p className="text-gray-600 text-xs text-right font-thin mt-5">07/07/2022</p>
          </div>
        </div>
      </div>

        <Link href="/products/productlist">
          <a><MainButton value='Back' styleClass={'mb-5 w-auto'}/></a>
        </Link>
    </div>
  );
}

ProductDetails.propTypes = {
  href: PropTypes.string,
};