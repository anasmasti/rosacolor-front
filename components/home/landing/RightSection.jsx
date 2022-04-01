export default function RightSection() {
  return (
    <div className="relative z-50 flex flex-col items-end justify-center w-full lg:w-1/2 ">
      <div className="container relative left-0 w-full max-w-4xl lg:absolute xl:max-w-6xl lg:w-screen">
        <img
          src="https://images.pexels.com/photos/6757565/pexels-photo-6757565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          className="h-screen w-full hidden lg:block xl:block"
        />
      </div>
    </div>
  );
}