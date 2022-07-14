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
    <div className="grid grid-cols-2 gap-24 m-auto  mb-5 left-0 right-0 text-center "
        //className={`p-10 pt-0 flex flex-col md:flex-row md:space-x-0 md:mt-0`}
    >
        {titleitems.map((item)=>(
            <CategoryTitleItem key={item.id} {...item}/>
        ))}

    </div>
  );
};

export default CategoryTitleItems;
