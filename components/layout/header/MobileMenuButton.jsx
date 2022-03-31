import { MenuAlt3Icon } from "@heroicons/react/outline";

export default function MobileMenuButton() {
  return (
    <button
      data-collapse-toggle="mobile-menu-3"
      type="button"
      className="inline-flex items-center p-2 ml-3 text-sm text-neutral-500 rounded-lg md:hidden hover:bg-neutral-100"
      aria-controls="mobile-menu-3"
      aria-expanded="false"
    >
      <span className="sr-only">Open main menu</span>
      <MenuAlt3Icon className="h-7 w-7 text-neutral-700" />
    </button>
  );
}
