import BlogCardItem from "./BlogCardItem";
import { BiPaintRoll } from "react-icons/Bi";
import { BsPaintBucket } from "react-icons/Bs";
import { GoPaintcan } from "react-icons/Go";
const BlogCardItems = () => {
  let blogCards = [
    {
      id: 1,
      title: "Lorem ipsum1",
      description:
        "1Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo obcaecati voluptatibus non tempora repudiandae.",
      href: "/blog1",
      icon: <BiPaintRoll className={`icon`} />,
      bgcolor: "bg-black",
      color:"white",
    },
    {
      id: 2,
      title: "Lorem ipsum 2",
      description:
        "2Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo obcaecati voluptatibus non tempora repudiandae.",
      href: "/blog2",
      icon: <BsPaintBucket className={`icon`} />,
      bgcolor: "bg-neutral-200",
      color:"black",

    },
    {
      id: 3,
      title: "Lorem ipsum 3",
      description:
        "3Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo obcaecati voluptatibus non tempora repudiandae.",
      href: "/blog3",
      icon: <GoPaintcan className={`icon`} />,
      bgcolor: "bg-red-600",
      color:"white",

    },
  ];

  return (
    <div
      className={`text-center h-72 m-0 p-0 items-center flex flex-col md:flex-row md:space-x-0 md:mt-0 md:text-l md:font-medium`}
    >
      {blogCards.map((item) => (
        <BlogCardItem
          key={item.id}
          {...item}
        />
      ))}
    </div>
  );
};

export default BlogCardItems;
