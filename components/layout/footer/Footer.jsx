import Newsletter from "../../shared/Newsletter";
import SocialMediaLinks from "../../shared/SocialMediaLinks";
import Copyright from "./Copyright";
import FooterLinks from "./FooterLinks";
import FooterParagraph from "./FooterParagraph";

export default function Footer() {
  return (
    <footer className="text-center bg-neutral-900 text-white">
      <div className="container px-6 pt-6">
        <SocialMediaLinks />
        <Newsletter />
        <FooterParagraph />
        <FooterLinks />
      </div>
      <Copyright />
    </footer>
  );
}