import FollowUs from "./FollowUs";
import MainButton from "../../shared/MainButton";
import MainParagraph from "./MainParagraph";
import MainTitle from "./MainTitle";

export default function LeftSection() {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center">
      <MainTitle />
      <MainParagraph />
      <MainButton />
      <FollowUs />
    </div>
  );
}
