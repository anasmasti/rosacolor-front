import SocialMediaLinks from "../../shared/SocialMediaLinks";

export default function FollowUs() {
  return (
    <div className="flex-col hidden mt-12 sm:flex ">
      <p className="mb-4 text-sm font-medium tracking-widest text-gray-600 uppercase">
        Suivez-nous sur les réseaux sociaux
      </p>
      <div className="flex justify-center">
        <SocialMediaLinks theme="dark" />
      </div>
    </div>
  );
}
