import React from "react";
import ProductDetailsItems from "./ProductDetailsItems";

export default function ProductDetails() {
  return (
    <div className="ml-12">
      <span className='text-dark
                      mb-6
                      uppercase
                      font-bold
                      text-[32px]
                      sm:text-[40px]
                      lg:text-[36px]
                      xl:text-4xl
                      underline decoration-red-500'
      >
        Product Details
      </span>
      <div className="flex justify-center my-12">
        <div className="flex flex-col md:flex-row md:max-w-3xl rounded-lg bg-white shadow-lg">
          <img
            className=" w-full object-cover md:h-auto md:w-36 rounded-t-lg md:rounded-none md:rounded-l-lg"
            src="/images/productlist/5.jpg"
            alt=""
          />
          <div className="p-6 flex flex-col justify-start">
            <h5 className="text-gray-900 text-xl font-medium mb-2">Product Name</h5>
            <p className="text-gray-700 text-base mb-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid mollitia quis inventore, voluptates error enim veniam odio sed sit fugiat vel consequatur voluptatem, nesciunt nobis obcaecati iusto quasi similique aliquam eius nostrum porro recusandae! Vitae, nemo similique voluptas nihil unde labore error sed, odio dicta debitis ipsam quasi libero deleniti, molestias incidunt suscipit et dolorum expedita commodi saepe dolor ullam doloribus harum? Hic nobis excepturi alias ipsa.
              <br/>
            </p>
            <p className="text-red-500 border border-black-200 rounded-lg mb-5 p-2"> 
              Saepe omnis modi corporis aliquid quis ipsum harum molestiae reprehenderit amet maiores sequi, quia odio! Non perspiciatis maiores repudiandae omnis perferendis itaque esse, praesentium veniam a at necessitatibus aliquid molestias, illum natus voluptatem.
            </p>
            <p className="text-gray-600 text-xs">07/07/2022</p>

          </div>
        </div>
        
      </div>
      <button className="
                  mx-5
                  inline-block
                  w-auto px-8
                  py-3 mx-auto
                  mt-0 text-base 
                  font-bold text-white
                  bg-red-500 
                  border-t
                  border-gray-200
                  rounded-md 
                  fold-bold 
                  lg:mx-0">Back</button>
    </div>
  );
}
