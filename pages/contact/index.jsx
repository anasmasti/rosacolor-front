import RightSecion from "../../components/contact/RightSecion";
import LeftSection from "../../components/contact/LeftSection";
import Title from "../../components/shared/Title";
export default function contact() {
  return (
    <div>
      <Title src='images/contact/contactbg.png' value1='contactez-nous' value2='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil commodi corporis tempore nesciunt iste ad hic cupiditate exercitationem incidunt molestiae illum cumque fuga harum, eveniet quasi, dolore alias ipsa vero.'/>
      <section className="bg-white py-20 px-6 overflow-hidden relative z-10 flex justify-center items-center">
        <div className="container">
          <div className="flex lg:justify-between">
            <LeftSection />
            <RightSecion />
          </div>
        </div>
      </section>

    </div>
  );
}
