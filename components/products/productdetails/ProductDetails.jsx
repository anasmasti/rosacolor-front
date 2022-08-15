import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import MainButton from "../../shared/MainButton";
import Title from "../../shared/Title";
export default function ProductDetails() {
  return (
    <div>
      <Title
        src="/images/productcategory/bg.png"
        value1="peinture décorative"
        value2="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil commodi corporis tempore nesciunt iste ad hic cupiditate exercitationem incidunt molestiae illum cumque fuga harum, eveniet quasi, dolore alias ipsa vero."
      />
      <div className="">
        <div className="flex justify-center my-12">
          <div className="flex flex-col md:flex-row md:max-w-5xl rounded-lg bg-white">
            <div className="flex flex-col justify-start ">
            
              <div className=" p-10">

                <h3 className="text-red-500 font-bold text-4xl underline">
                  Description:
                </h3>
                {/* <button
                className="text-white font-bold bg-red-500 py-1 px-12 rounded inline-flex items-center ml-12"
              >
              
                <span>Fiche Technique</span>
              </button> */}

                <p className="text-gray-500 mt-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque unde dolores provident officia necessitatibus praesentium saepe corporis labore tempora odit.
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  nihil, quos vero incidunt, aut numquam distinctio odit harum
                  consequuntur illum voluptatibus culpa recusandae labore earum
                  rem eius magnam sunt provident. Commodi natus praesentium odio
                  a necessitatibus, cupiditate minus aperiam amet magni quia
                  minima reiciendis molestias eum, recusandae quos facilis.
                  
                </p>
                <div className="flex flex-row justify-between mt-14">
                  <div className="flex flex-col justify-center items-center text-center w-1/3 text-white bg-stone-900 p-4">
                    <img src="/icons/surface.png" className="w-12 h-12 invert"/>
                    <h2 className="">Rendement</h2>
                    <p>10 m²/kg</p>
                  </div>
                  
                  <div className="flex flex-col justify-center items-center text-center w-1/3 p-4 bg-neutral-200">
                    <img src="/icons/dilution.png" className="w-12 h-12"/>
                    <h2 className="text-black">Dilution</h2>
                    <p>A L'eau</p>
                  </div>
                      <div className="flex flex-col justify-center items-center text-center w-1/3 text-white bg-red-600 p-4">
                    <img src="/icons/sechage.png" className="w-12 h-12 invert"/>
                    <h2 className="">Séchage</h2>
                    <p>8 Heures</p>
                  </div>
                 </div>
              </div>
            </div>
            <div className="flex-row mb-5 p-10">
            <h3 className="text-red-500 font-bold text-4xl underline">
                  Utilisation:
                </h3>
                <p className="text-gray-500 mt-4">
                  Voluptate eum architecto ea totam suscipit explicabo ab
                  delectus? Veniam veritatis hic commodi alias, natus fugiat
                  vitae explicabo voluptatum similique aliquid aspernatur quasi
                  ipsam expedita, cumque facere minima. Nihil, vitae quidem!
                </p>
                <div className="flex-row">
              <img
                className=" w-full sm:h-auto object-fill md:w-5/6 h-full rounded-t-lg md:rounded-none md:rounded-l-lg"
                src="/images/productlist/10.png"
                alt="background"
              />
            
            </div>
                
            </div>
            {/* <div className="flex-row mb-5 p-10">
              <img
                className="p-5 w-full sm:h-auto object-fill md:w-5/6 h-full rounded-t-lg md:rounded-none md:rounded-l-lg"
                src="/images/productlist/9.png"
                alt="background"
              />
              <button
                className="text-white font-bold bg-red-500 py-1 px-12 rounded inline-flex items-center ml-12"
              >
                <svg
                  className="w-4 h-4 mr-2 invert"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                </svg>
                <span>Fiche Technique</span>{" "}
              </button>{" "}
            </div> */}
          </div>
        </div>

        <Link href="/products/productlist">
          <a>
            <MainButton value="Back" styleClass={"mb-5 w-auto"} />
          </a>
        </Link>
      </div>
    </div>
  );
}

ProductDetails.propTypes = {
  href: PropTypes.string,
};
