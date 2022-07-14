import CategoryCardItems from "./CategoryCardItems";
import CategoryTitles from "././categorytitles/CategoryTitles";
const CategoryCards = () => {
    return ( 
        <div className="grid grid-rows-1 gap-0">
            
            <CategoryCardItems/><CategoryTitles/>
        </div>
     );
}
 
export default CategoryCards;