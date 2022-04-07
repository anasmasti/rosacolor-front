import BlogCardItem from "./BlogCardItem";
import {BiPaintRoll} from "react-icons/Bi";
import {BsPaintBucket} from "react-icons/Bs";
import {GoPaintcan} from "react-icons/Go"
const BlogCardItems = () => {
    let blogCards=[
        {
            id:1,
            title: "Lorem ipsum",
            description:"1Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo obcaecati voluptatibus non tempora repudiandae.",
            href:"/blog1",
            icon:<BiPaintRoll className={`icon`}/>,
        },
        {
            id:2,
            title: "Lorem ipsum",
            description:"2Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo obcaecati voluptatibus non tempora repudiandae.",
            href:"/blog2",
            icon:<BsPaintBucket className={`icon`}/>,
        },
        {
            id:3,
            title: "Lorem ipsum",
            description:"3Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo obcaecati voluptatibus non tempora repudiandae.",
            href:"/blog3",
            icon:<GoPaintcan className={`icon`}/>,
        },
    ]
    return ( 
        <div className={`justify-evenly text-center h-72 items-center text-white flex flex-col p-5 md:flex-row md:space-x-0 md:mt-0 md:text-l md:font-medium bg-red-600`}>
            {blogCards.map((item) => (
                <BlogCardItem key={item.id} title={item.title} description={item.description} href={item.href} icon={item.icon} />
            ))}
        </div>
    );
}
 
export default BlogCardItems;