import SocialMediaLinks from "../../shared/SocialMediaLinks";
import Copyright from "./Copyright";
import FooterLinks from "./FooterLinks";
import FooterParagraph from "./FooterParagraph";

export default function Footer() {
  return (
    <footer className="text-center bg-neutral-900 text-white flex justify-center items-center">
      <div className="container px-6 pt-6">
        <SocialMediaLinks />
        <FooterParagraph />
        <FooterLinks />
        <Copyright />
      </div>
    </footer>
  );
}
