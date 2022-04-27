const CategoryCardItem = ({ href, src}) => {
  return (
    <div className="flex align-items-center">
      <a href={href}>
          <img 
          src={src} 
          className="grayscale hover:grayscale-0 transform transition duration-500 hover:scale-105 rounded-2xl w-96 max-w-md h-64 max-h-md object-cover"/>
      </a>
    </div>
  );
};

export default CategoryCardItem;
