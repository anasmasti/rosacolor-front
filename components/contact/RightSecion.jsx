import MainTitle from "../shared/MainTitle";
import ContactForm from "./ContactForm";

export default function RightSecion() {
  return (
    <>
    <div className="w-full lg:w-1/2 xl:w-5/12 px-4 xl:mt-20 lg:mt-16">
      <div className="relative p-8 sm:p-12 border shadow-md">
        <MainTitle value="Send us a message" styleClass={"m-0 text-center xl:text-2xl lg:text-2xl md:text-2xl text-[20px] sm:text-lg no-underline mt-0 "}/>
        <ContactForm />
      </div>
    </div>
    


    </>
  );
}
