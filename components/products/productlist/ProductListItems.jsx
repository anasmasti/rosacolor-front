import data from "../././../data/data.json";
import React from "react";
import ProductListItem from "./ProductListItem";

export default function ProductListItems() {
  return (
    <div className={`w-full grid grid-cols-1 gap-2 gap-y-6 md:grid-cols-2 lg:grid-cols-4 mb-5 p-14`}>
      {data.map((items) => (
        <ProductListItem key={items.id} {...items} />
      ))}
    </div>
  );
}
