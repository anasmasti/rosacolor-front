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
      bgcolor: "bg-stone-900",
      color: "white",
      align: "right",
    },
    {
      id: 2,
      title: "Lorem ipsum 2",
      description:
        "2Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo obcaecati voluptatibus non tempora repudiandae.",
      href: "/blog2",
      icon: <BsPaintBucket className={`icon`} />,
      bgcolor: "bg-neutral-200",
      color: "black",
      align: "center",

    },
    {
      id: 3,
      title: "Lorem ipsum 3",
      description:
        "3Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo obcaecati voluptatibus non tempora repudiandae.",
      href: "/blog3",
      icon: <GoPaintcan className={`icon`} />,
      bgcolor: "bg-red-600",
      color: "white",
      align: "left",

    },
  ];

  return (
    <div
      className={`m-0 p-0 flex flex-col md:flex-row md:space-x-0 md:mt-0 md:text-sm md:font-medium`}
    >
      {blogCards.map((item) => (
        <BlogCardItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default BlogCardItems;
