import ContactTitle from "./ContactTitle";
import ContactParagraph from "./ContactParagraph";
import Info from "./Info";

export default function InfoSection() {
  return (
    <div className="max-w-[570px] mb-12 lg:mb-0">
      <ContactTitle />
      <ContactParagraph />
      <Info />
    </div>
  );
}
