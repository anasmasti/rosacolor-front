import AboutUs from "../../components/about/AboutUs";
import OurServices from "../../components/about/OurServices";
import MainTitle from "../../components/shared/MainTitle";
import Title from "../../components/shared/Title";

export default function About() {
  return (
    <div>
      <Title src='images/about/about.png' value1='à propos de nous' value2='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil commodi corporis tempore nesciunt iste ad hic cupiditate exercitationem incidunt molestiae illum cumque fuga harum, eveniet quasi, dolore alias ipsa vero.'/>

      <section className="row">
        <div className="grid grid-cols-2 mx-12">
          <div>
            <MainTitle value="L'entreprise" 
                 styleClass={`mt-0 ml-14 pt-16 
                              font-black
                              text-[32px]
                              sm:text-4xl
                              lg:text-4xl
                              xl:text-4xl
                              `}/>
            <AboutUs />
          </div>
          <img src="images/about/atelier.jpg"
            className="my-20 h-fit lg:h-5/6 md:h-5/6 w-full mr-20 grayscale duration-300 hover:grayscale-0 object-cover"/>
        </div>

          <OurServices />
        
      </section>
    </div>
  );
}
