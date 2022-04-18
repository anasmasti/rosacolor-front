import Image from "next/image";
import landingMainImage from "../../../public/images/landing/main.jpeg";
// import style from "../../../public/styles/main-image.css";

export default function RightSection() {
  // console.log(style);
  return (
    <div className="relative z-50 flex flex-col items-end justify-center w-full lg:w-1/2">
      <div
        className={
          "container relative left-0 w-full max-w-4xl lg:absolute xl:max-w-6xl lg:w-screen"
        }
      >
        {/* <Image
            src={landingMainImage}
            height="1000"
            loading="eager"
            alt="Rosacolor landing image"
            id="landing-image"
            quality={50}
          /> */}
      </div>
    </div>
  );
}
