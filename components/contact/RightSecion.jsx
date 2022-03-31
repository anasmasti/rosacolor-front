import ContactForm from "./ContactForm";

export default function RightSecion() {
  return (
    <div className="w-full lg:w-1/2 xl:w-5/12 px-4">
      <div className="bg-red-500 relative rounded-lg p-8 sm:p-12 shadow-lg">
        <ContactForm />
      </div>
    </div>
  );
}
