import AboutParagraph from "./AboutParagraph";
import AboutTitle from "./AboutTitle";

export default function AboutUs() {
  let paragraphs = [
    {
      id: 1,
      body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem impedit sequi ea? Odio ex doloribus laudantium fuga provident facilis nemo expedita accusantium vero veritatis culpa atque labore, qui ipsam. Ea.",
    },
    {
      id: 2,
      body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem impedit sequi ea? Odio ex doloribus laudantium fuga provident facilis nemo expedita accusantium vero veritatis culpa atque labore, qui ipsam. Ea. r sit amet consectetur adipisicing elit. Exercitationem impedit sequi ea? Odio ex doloribus laudantium fuga provident facilis nemo expedita accusantium vero veritatis culpa atque labore, qui ipsam. Ea. r sit amet consectetur adipisicing elit. Exercitationem impedit sequi ea? Odio ex doloribus laudantium fuga provident facilis nemo expedita accusantium vero veritatis culpa atque labore, qui ipsam. Ea.",
    },
    {
      id: 3,
      body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem impedit sequi ea? Odio ex doloribus laudantium fuga provident facilis nemo expedita accusantium vero veritatis culpa atque labore, qui ipsam. Ea.",
    },
  ];
	
  return (
    <div className="max-w-8xl mx-auto container bg-white pt-16">
      <AboutTitle header="A propos de nous" title="Qui sommes-nous ?" />
      <AboutParagraph content={paragraphs} />
    </div>
  );
}
