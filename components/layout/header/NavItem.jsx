export default function NavItem({ title, href }) {
  return (
    <li>
      <a
        href={href}
        className="block py-2 pr-4 pl-3 text-white rounded md:bg-transparent md:text-neutral-400 md:p-0 dark:text-white"
        aria-current="page"
      >
        {title}
      </a>
    </li>
  );
}
