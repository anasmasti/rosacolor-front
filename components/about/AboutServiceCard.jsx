export default function AboutServiceCard({ title, icon, content }) {
  return (
    <div className="focus:outline-none flex sm:w-full md:w-5/12 pb-20">
      <div className="w-20 h-20 relative mr-5">
        <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1"></div>
        <div className="absolute text-white bottom-0 left-0 bg-red-400 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
          {icon}
        </div>
      </div>
      <div className="w-10/12">
        <h2 className="focus:outline-none text-lg font-bold leading-tight text-gray-800">
          {title}
        </h2>
        <p className="focus:outline-none text-base text-neutral-400 leading-normal pt-2">
          {content}
        </p>
      </div>
    </div>
  );
}
