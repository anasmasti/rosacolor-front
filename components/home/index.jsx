import LandingSection from "./landing";
import RightSection from "./landing/RightSection";
import BlogCards from "./blogcards/BlogCards";
import ProductCategoryCards from "../products/ProductCategory/ProductCategoryCards";
import FullCard from "../shared/FullCard";
import Newsletter from "../shared/Newsletter";

export default function Home() {
  return (
    <section>
      <LandingSection />
      <BlogCards />
      <ProductCategoryCards />
      <FullCard />
      <Newsletter />
    </section>
  );
}
