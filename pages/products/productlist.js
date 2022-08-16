import React from "react";
import ProductList from "../../components/products/productlist/ProductList";
import MainTitle from "../../components/shared/MainTitle";

export default function productslist() {
  return (
    <div className="bg-gray-50">
      <div className="flex flex-row w-full justify-between items-center py-4">
        <MainTitle
          value="PEINTURE DÉCORATIVE"
          styleClass={`
             md:text-2xl
             sm:text-2xl
             lg:text-4xl
             `}
        />
      </div>
      <div className="flex flex-row mr-5">
        <ProductList />
      </div>
    </div>
  );
}
