const BlogCardItem = ({ title, description, href, color, bgcolor,align }) => {
  return (
    <div className={`p-12 text-center ${bgcolor}`}>
      <a href={href}>
        <h3 className={`title text-${color} text-${align} text-3xl`}>{title}</h3>
        <div className={`descrip text-${color} text-${align}`}>{description}</div>
      </a>
    </div>
  );
};

export default BlogCardItem;
