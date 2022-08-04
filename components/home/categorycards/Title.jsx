import MainTitle from "../../shared/MainTitle";

const Title = () => {
  return (
    <>
      <div className="title my-5">
        <MainTitle value="Our Products" styleClass={`text-center underline-offset-8`}/>  
        <div className="">
          <p className="text-center text-xs m-5 font-thin text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero illo
            pariatur quae explicabo reprehenderit odit ex impedit dolor
            molestias eveniet.{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default Title;
