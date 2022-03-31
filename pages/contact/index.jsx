import RightSecion from "../../components/contact/RightSecion";
import LeftSection from "../../components/contact/LeftSection";

export default function contact() {
  return (
    <section className="bg-white py-20 xl:px-20  px-11 lg:py-[120px] overflow-hidden relative z-10">
      <div className="container">
        <div className="flex flex-wrap lg:justify-between -mx-4">
          <LeftSection />
          <RightSecion />
        </div>
      </div>
    </section>
  );
}
