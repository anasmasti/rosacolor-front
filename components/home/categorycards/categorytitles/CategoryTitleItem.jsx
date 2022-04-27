const CategoryTitleItem = ({ title , href }) => {
  return (
      <a href={href} className="text-red-500 py-3 px-14 text-3xl font-bold bg-white rounded-3xl shadow-lg">
        {title}
      </a>
  );
};

export default CategoryTitleItem;
