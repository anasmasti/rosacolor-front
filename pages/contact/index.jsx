import RightSecion from "../../components/contact/RightSecion";
import LeftSection from "../../components/contact/LeftSection";
import ProductCategoryCards from "../../components/contact/products/ProductCategory/ProductCategoryCards";
import ProductList from "../../components/contact/products/ProductList/ProductList";
import ProductDetails from "../../components/contact/products/ProductDetails/ProductDetails";

export default function contact() {
  return (
    <div>
      <section className="bg-white py-20 px-6 overflow-hidden relative z-10 flex justify-center items-center">
        <div className="container">
          <div className="flex flex-wrap lg:justify-between -mx-4">
            <LeftSection />
            <RightSecion />
          </div>
        </div>
      </section>
      <div className="mb-5">        
        <ProductCategoryCards/>
        <ProductList/>
        <ProductDetails/>
      </div>
    </div>
  );
}
