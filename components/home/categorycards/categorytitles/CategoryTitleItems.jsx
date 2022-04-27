import CategoryTitleItem from "./CategoryTitleItem";
const CategoryTitleItems = () => {
  let titleitems = [
    {
      id: 1,
      title: "Interieur",
      href: "/interior",
    },
    {
      id: 2,
      title: "Exterieur",
      href: "/exterior",
    },
  ];

  return (
    <div
        className={`p-10 absolute gap-44 bottom-96 right-72 pt-0 flex flex-col md:flex-row md:space-x-0 md:mt-0`}
    >
        {titleitems.map((item)=>(
            <CategoryTitleItem key={item.id} {...item}/>
        ))}

    </div>
  );
};

export default CategoryTitleItems;
