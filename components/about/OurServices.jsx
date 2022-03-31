import AboutServiceCard from "./AboutServiceCard";
import { FiStar, FiShield, FiTruck, FiHeadphones } from "react-icons/fi";

export default function OurServices() {
  let ourServices = [
    {
      id: 1,
      title: "Top qualité",
      content:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate.",
      icon: <FiStar className="h-8 w-8" />,
    },
    {
      id: 2,
      title: "Securisé",
      content:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate.",
      icon: <FiShield className="h-8 w-8" />,
    },
    {
      id: 3,
      title: "Livraison rapide",
      content:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate.",
      icon: <FiTruck className="h-8 w-8" />,
    },
    {
      id: 4,
      title: "Support 7/7",
      content:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate.",
      icon: <FiHeadphones className="h-8 w-8" />,
    },
  ];
	
  return (
    <section className="max-w-8xl mx-auto container bg-white pt-16">
      <div className="flex items-center flex-col px-4">
        <p className="focus:outline-none uppercase text-sm text-center text-gray-600 leading-4">
          Nos services
        </p>
        <h1 className="focus:outline-none text-4xl lg:text-4xl font-extrabold text-center leading-10 text-gray-800 lg:w-5/12 md:w-9/12 pt-4">
				Lorem ipsum is placeholder text commonly 
        </h1>
      </div>
      <div className="focus:outline-none mt-20 flex flex-wrap justify-center gap-10 px-4">
        {ourServices.map((service) => (
          <AboutServiceCard
            key={service.id}
            title={service.title}
            content={service.content}
            icon={service.icon}
          />
        ))}
      </div>
    </section>
  );
}
