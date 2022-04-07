import LeftSection from "./landing/LeftSection";
import RightSection from "./landing/RightSection";
import Cards from "./blogcards/BlogCards"

export default function Home() {
  return (
    <div className="relative items-center justify-center w-full overflow-x-hidden lg:pt-40 lg:pb-40 xl:pt-40 xl:pb-64">
      <div className="container flex flex-col items-center justify-between h-full max-w-6xl px-8 mx-auto -mt-32 lg:flex-row xl:px-0">
        <LeftSection />
        <RightSection />
      </div>
      <div>
        <Cards/>
      </div>
      
    </div>
    
  );
}