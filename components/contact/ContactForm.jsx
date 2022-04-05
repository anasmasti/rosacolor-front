export default function ContactForm() {
  return (
    <form>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Entrer nom"
          className="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        bg-red-400
                        border border-red-400
                        outline-none
                        placeholder-white
                        focus-visible:shadow-none
                        focus:border-white
                        "
        />
      </div>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Entrer ton Prénom"
          className="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        bg-red-400
                        border border-red-400
                        outline-none
                        placeholder-white
                        focus-visible:shadow-none
                        focus:border-white
                        "
        />
      </div>
      <div className="mb-6">
        <input
          type="email"
          placeholder="Entrer ton Email"
          className="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        bg-red-400
                        border border-red-400
                        outline-none
                        placeholder-white
                        focus-visible:shadow-none
                        focus:border-white
                        "
        />
      </div>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Entrer ton Téléphone"
          className="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        bg-red-400
                        border border-red-400
                        outline-none
                        placeholder-white
                        focus-visible:shadow-none
                        focus:border-white
                        "
        />
      </div>
      <div className="mb-6">
        <textarea
          rows="6"
          placeholder="Entrer ton Message"
          className="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        bg-red-400
                        border border-red-400
                        outline-none
                        placeholder-white
                        focus-visible:shadow-none
                        focus:border-white
                        "
        ></textarea>
      </div>
      <div>
        <button
          type="submit"
          className="
                        w-full
                        text-neutral-800
                        bg-white
                        rounded
                        border border-primary
                        p-3
                        transition
                        hover:bg-opacity-90
                        font-bold
                        "
        >
          Envoyer le message
        </button>
      </div>
    </form>
  );
}
