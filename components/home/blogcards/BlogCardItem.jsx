const BlogCardItem = ({ title, description, href, icon, color, bgcolor,align }) => {
  return (
    <div className={`flex align-items-center justify-center p-12 ${bgcolor}`}>
      <a href={href}>
        <div className={`icon text-${color} text-${align}`}>{icon}</div>
        <div className={`title text-${color} text-${align}`}>{title}</div>
        <div className={`descrip text-${color} text-${align}`}>{description}</div>
      </a>
    </div>
  );
};

export default BlogCardItem;
