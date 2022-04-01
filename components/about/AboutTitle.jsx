export default function AboutTitle({ header, title }) {
  return (
    <div className="flex items-center flex-col px-4">
      <p className="focus:outline-none uppercase text-sm text-center text-neutral-500 leading-4">
        {header}
      </p>
      <h1 className="focus:outline-none text-4xl lg:text-4xl font-extrabold text-center leading-10 text-gray-800 lg:w-5/12 md:w-9/12 pt-4">
        {title}
      </h1>
    </div>
  );
}
