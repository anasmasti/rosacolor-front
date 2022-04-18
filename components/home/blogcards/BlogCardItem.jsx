const BlogCardItem = ({ title, description, href, icon, color, bgcolor }) => {
  return (
    <div className={`flex-container p-12 ${bgcolor}`}>
      <a href={href}>
        <div className={`icon text-${color}`}>{icon}</div>
        <div className={`title text-${color}`}>{title}</div>
        <div className={`descrip text-${color}`}>{description}</div>
      </a>
    </div>
  );
};

export default BlogCardItem;
