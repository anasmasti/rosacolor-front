import { useCallback, useEffect, useRef, useState } from "react";
import AboutParagraph from "./AboutParagraph";
import aboutStyle from "../../styles/about.module.scss";
import MainTitle from "../shared/MainTitle";

export default function AboutUs() {
  const [scrollY, setScrollY] = useState(0);
  const handelScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);
  const refContainer = useRef();
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
  let numberOfPages = 3;
  let progress = 0;
  let { current: containerElement } = refContainer;
  
  if (containerElement) {
    let { clientHeight, offsetTop } = containerElement;
    let screenHeight = window.innerHeight;
    let halfScreenHeight = screenHeight / 2;
    let persentY =
      Math.min(
        clientHeight + halfScreenHeight,
        Math.max(-screenHeight, scrollY - offsetTop) + halfScreenHeight
      ) / clientHeight;
    progress = Math.min(
      numberOfPages - 0.5,
      Math.max(0.5, persentY * numberOfPages)
    );
  }

  useEffect(() => {
    document.addEventListener("scroll", handelScroll);
    return () => document.removeEventListener("scroll", handelScroll);
  }, [handelScroll]);

  return (
    <div className="max-w-8xl mx-auto container bg-white ">
      
      <div ref={refContainer} className={`${aboutStyle.about_us_text} p-14 `}>
        <AboutParagraph content={paragraphs} progress={progress} />
      </div>
    </div>
  );
}
