import AboutUs from "../../components/about/AboutUs";
import OurServices from "../../components/about/OurServices";
import MainTitle from "../../components/shared/MainTitle";

export default function About() {
  return (
    <section className="row">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="lg:mt-3">
          <MainTitle
            value="À propos de Rosacolor"
            styleClass={`font-bold text-4xl`}
          />
          <AboutUs />
        </div>
        <img
          src="images/about/atelier.jpg"
          className="hidden lg:flex my-20 h-fit lg:h-5/6 md:h-5/6 w-full mr-20 grayscale duration-300 hover:grayscale-0 object-cover"
        />
      </div>

      <OurServices />
    </section>
  );
}
