import Logo from "../../shared/Logo";
import NavItems from "./NavItems";
import SearchBar from "../../shared/SearchBar";
import MobileMenuButton from "./MobileMenuButton";

export default function NavBar() {
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Logo />
        <div className="flex md:order-2">
          <SearchBar />
          <MobileMenuButton />
        </div>
        <NavItems />
      </div>
    </nav>
  );
}
