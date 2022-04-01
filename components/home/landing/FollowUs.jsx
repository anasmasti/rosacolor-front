import SocialMediaLinks from "../../shared/SocialMediaLinks";

export default function FollowUs() {
  return (
    <div className="flex-col hidden mt-12 sm:flex lg:mt-24">
    <p className="mb-4 text-sm font-medium tracking-widest text-gray-500 uppercase">
      Suivez-nous sur les réseaux sociaux
    </p>
    <div className="flex justify-center">
      <SocialMediaLinks theme="dark" />
    </div>
  </div>
  )
}
