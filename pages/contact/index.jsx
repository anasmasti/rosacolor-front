import RightSecion from "../../components/contact/RightSecion";
import LeftSection from "../../components/contact/LeftSection";
import Title from "../../components/shared/Title";
export default function contact() {
  return (
    <section className="bg-white py-20 px-6 overflow-hidden relative z-10 flex justify-center items-center">
      <div className="container">
        <div className="flex flex-col lg:flex-row">
          <LeftSection />
          <RightSecion />
        </div>
      </div>
    </section>
  );
}
