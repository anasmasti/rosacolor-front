import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

export default function SocialMediaLinks({ theme }) {
  let socialMediaList = [
    {
      id: 1,
      icon: <FaFacebookF className="h-4 w-4 " />,
      link: "facebook.com",
    },
    {
      id: 2,
      icon: <FaLinkedinIn className="h-4 w-4 " />,
      link: "facebook.com",
    },
    {
      id: 3,
      icon: <FaInstagram className="h-4 w-4 " />,
      link: "facebook.com",
    },
    {
      id: 4,
      icon: <FaTwitter className="h-4 w-4 " />,
      link: "facebook.com",
    },
  ];

  return (
    <div className="flex justify-center mb-6">
      {socialMediaList.map((item) => (
        <a
          key={item.id}
          href={item.link}
          className={`${
            theme != "dark"
              ? "border-white text-white"
              : "border-neutral-600 text-neutral-600"
          } flex justify-center items-center rounded-full border-2 leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1`}
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
}
