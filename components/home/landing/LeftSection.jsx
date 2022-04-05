import FollowUs from "./FollowUs";
import MainButton from "./MainButton";
import MainParagraph from "./MainParagraph";
import MainTitle from "./MainTitle";

export default function LeftSection() {
  return (
    <div className="z-30 flex flex-col items-center w-full max-w-xl pt-48 text-center lg:items-start lg:w-1/2 lg:pt-20 xl:pt-40 lg:text-left mb-8 lg:mb-0 xl:mb-0 md:mb-0">
      <MainTitle />
      <MainParagraph />
      <MainButton />
      <FollowUs />
    </div>
  );
}
