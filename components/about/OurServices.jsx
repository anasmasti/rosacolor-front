import AboutServiceCard from "./AboutServiceCard";
import { FiStar, FiShield, FiTruck, FiHeadphones } from "react-icons/fi";
import AboutTitle from "./AboutTitle";

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
    <div className="max-w-8xl mx-auto container bg-white pt-16 mb-8">
      <AboutTitle
        header="Nos services"
        title="Lorem ipsum is placeholder text commonly"
      />

      <div className="focus:outline-none mt-20 flex justify-center gap-10 px-4">
        {ourServices.map((service) => (
          <AboutServiceCard
            key={service.id}
            title={service.title}
            content={service.content}
            icon={service.icon}
          />
        ))}
      </div>
    </div>
  );
}
