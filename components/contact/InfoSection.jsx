import ContactParagraph from "./ContactParagraph";
import Info from "./Info";
import MainTitle from "../shared/MainTitle";

export default function InfoSection() {
  return (
    <div className="mt-5">
      <MainTitle value="Prenez contact avec nous" 
                 styleClass={`mb-5 mt-5
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
