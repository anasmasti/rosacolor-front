const CategoryTitleItem = ({ title , href }) => {
  return (
      <a href={href} className="text-red-500 p-3 text-3xl font-bold bg-white rounded-3xl shadow-lg">
        {title}
      </a>
  );
};

export default CategoryTitleItem;
