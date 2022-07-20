import ContactParagraph from "./ContactParagraph";
import Info from "./Info";
import MainTitle from "../shared/MainTitle";

export default function InfoSection() {
  return (
    <div className="mb-12 lg:mb-0">
      <span className="block mb-4 text-base text-primary font-semibold">
        Contactez-nous
      </span>
      <MainTitle value="Prenez contact avec nous" 
                 styleClass={`mb-6
                              no-underline
                              ml-0
                              font-black
                              text-[32px]
                              sm:text-4xl
                              lg:text-4xl
                              xl:text-4xl
                              `}
      />
      <ContactParagraph />
      <Info />
    </div>
  );
}
