import { HiSearch } from 'react-icons/hi'

export default function SearchBar() {
  return (
    <div className="hidden relative mr-3 md:mr-0 md:block">
      <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
        <HiSearch className="h-4 w-4 text-neutral-400" />
      </div>
      <input
        type="text"
        id="email-adress-icon"
        className="block p-2 pl-10 w-full sm:text-sm"
        placeholder="Search..."
      />
    </div>
  );
}
