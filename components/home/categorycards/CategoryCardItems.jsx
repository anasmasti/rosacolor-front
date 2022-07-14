import CategoryCardItem from "./CategoryCardItem";
import CategoryTitles from "./categorytitles/CategoryTitles";
const CategoryCardItems = () => {
  let categorycard = [
    {
      id: 1,
      href:"/interior",
      src: "/images/interiorexterior/interieur.jpg"
    },
    {
      id: 2,
      href:"/exterior",
      src: "/images/interiorexterior/exterieur.jpg"
    },
  ];

  return (
    <div className={`px-5 relative
                    flex flex-col 
                    justify-center 
                    gap-10 
                    justify-items-center 
                    md:flex-row 
                    md:space-x-0 
                    md:mt-0`}>
      {categorycard.map((item)=>(
        <CategoryCardItem key={item.id} {...item}/>
      ))}
    </div>
    
  );
};

export default CategoryCardItems;
