import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-white">
      <h1 className="text-9xl font-extrabold text-neutral-900 tracking-widest">
        404
      </h1>
      <div className="bg-red-500 text-neutral-100 px-2 text-sm rounded rotate-12 absolute">
        Page Not Found
      </div>
      <div className="mt-5">
        <Link href="/">
          <a className="w-full text-white bg-red-500 rounded border border-primary p-3 transition hover:bg-opacity-90">
            Aller à la page d&apos;accueil
          </a>
        </Link>
      </div>
    </div>
  );
}
