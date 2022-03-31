import {FiStar, FiLock} from 'react-icons/fi'

export default function About() {
  return (
    <section className="max-w-8xl mx-auto container bg-white pt-16">
      <div>
        <div className="flex items-center flex-col px-4">
          <p className="focus:outline-none uppercase text-sm text-center text-gray-600 leading-4">
            in few easy steps
          </p>
          <h1 className="focus:outline-none text-4xl lg:text-4xl font-extrabold text-center leading-10 text-gray-800 lg:w-5/12 md:w-9/12 pt-4">
            Create Beautiful Landing Pages & Web Apps in a Jiffy
          </h1>
        </div>
        <div className="focus:outline-none mt-20 flex flex-wrap justify-center gap-10 px-4">
         
          <div className="focus:outline-none flex sm:w-full md:w-5/12 pb-20">
            <div className="w-20 h-20 relative mr-5">
              <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1"></div>
              <div className="absolute text-white bottom-0 left-0 bg-red-400 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                <FiStar className='w-8 h-8'/>
              </div>
            </div>
            <div className="w-10/12">
              <h2 className="focus:outline-none text-lg font-bold leading-tight text-gray-800">
                Ready to use components
              </h2>
              <p className="focus:outline-none text-base text-gray-600 leading-normal pt-2">
                It provides a very simple start, no need to write a lot of code,
                you just import it and start the primitive components and create
                the ones you need.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
