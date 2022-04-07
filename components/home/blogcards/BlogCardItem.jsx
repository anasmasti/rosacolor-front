
const BlogCardItem = ({title,description,href,icon}) => {
    return ( 
        <div className={`flex-container p-12`}>
            <a href={href}>
                <div className={`icon`}>{icon}</div>
                <div className={`title`}>{title}</div>
                <div className={`descrip`}>{description}</div>
            </a>
        </div>
     );
}
 
export default BlogCardItem;
