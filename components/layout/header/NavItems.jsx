import NavItem from "./NavItem";

export default function NavItems() {
  let menuItems = [
    { id: 1, title: "Accueil", href: "/" },
    { id: 1, title: "À propos de nous", href: "about" },
    { id: 1, title: "Produits", href: "products" },
    { id: 1, title: "Contact", href: "contact" },
  ];

  return (
    <>
      <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
        {menuItems.map((item) => (
          <NavItem title={item.title} href={item.href} />
        ))}
      </ul>
    </>
  );
}
