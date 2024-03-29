import MainTitle from "../shared/MainTitle";
import ContactForm from "./ContactForm";

export default function RightSecion() {
  return (
    <>
    <div className="w-full lg:w-1/2 xl:w-2/3 px-4 xl:mt-5 lg:mt-16 sm:mt-10 ">
      <div className="relative p-8 sm:p-12 border shadow-md">
        <MainTitle value="Send us a message" styleClass={"text-center xl:text-2xl lg:text-2xl md:text-lg text-[20px] no-underline mt-0"}/>
        <ContactForm />
      </div>
    </div>
  


    </>
  );
}
