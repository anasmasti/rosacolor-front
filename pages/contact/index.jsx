import ContactForm from "../../components/contact/ContactForm";

export default function contact() {
  return (
    <section className="bg-white py-20 xl:px-20  px-11 lg:py-[120px] overflow-hidden relative z-10">
      <div className="container">
        <div className="flex flex-wrap lg:justify-between -mx-4">
          <div className="w-full lg:w-1/2 xl:w-6/12 px-4">
            <div className="max-w-[570px] mb-12 lg:mb-0">
              <span className="block mb-4 text-base text-primary font-semibold">
                Contactez-nous
              </span>
              <h2
                className="
                  text-dark
                  mb-6
                  uppercase
                  font-bold
                  text-[32px]
                  sm:text-[40px]
                  lg:text-[36px]
                  xl:text-5xl
                  "
              >
                PRENEZ CONTACT AVEC NOUS
              </h2>
              <p className="text-base text-neutral-500 leading-relaxed mb-9">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eius tempor incididunt ut labore et dolore magna aliqua. Ut enim
                adiqua minim veniam quis nostrud exercitation ullamco
              </p>

              <div className="bg-white">
                <div className="container mx-auto">
                  <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl ">
                    Quelques informations <br /> sur{" "}
                    <span className="underline decoration-red-500">
                      Rosacolor
                    </span>
                  </h1>

                  <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-8 md:grid-cols-2 xl:grid-cols-2">
                    <div className="p-5 space-y-1 border-2 border-red-400 rounded-md">
                      <h3 className="text-xl font-semibold text-gray-700 capitalize ">
                        Adresse
                      </h3>

                      <p className="text-gray-500 ">
                        N°39, Rue Al Fourat, 1er Etage, Mâarif 20100 Casablanca
                        - Maroc.
                      </p>
                    </div>

                    <div className="p-5 space-y-1 border-2 border-red-400 rounded-md">
                      <h3 className="text-xl font-semibold text-neutral-700 capitalize ">
                        Nos Horaires
                      </h3>

                      <p className="text-neutral-500">
                       <span className="text-red-500">Du LUNDI Au VENDREDI :</span>08:00 – 18:00 <br />
                       <span className="text-red-500">SAMEDI :</span> Fermé <br />
                       <span className="text-red-500">DIMANCHE :</span>  Fermé
                      </p>
                    </div>

                    <div className="p-5 space-y-1 border-2 border-red-400 rounded-md">
                      <h3 className="text-xl font-semibold text-gray-700 capitalize ">
                        Contactez-nous
                      </h3>

                      <p className="text-gray-500 ">
                      <span className="text-red-500">Fixe :</span> 05229-91300 <br />
                      <span className="text-red-500">Email :</span> mediexperts@mediexperts.ma
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 xl:w-5/12 px-4">
            <div className="bg-red-500 relative rounded-lg p-8 sm:p-12 shadow-lg">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
