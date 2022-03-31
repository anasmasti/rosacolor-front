import Link from "next/link";

export default function NavItem({ title, href }) {
  return (
    <li>
      <Link href={href}>
        <a
          className="block py-2 pr-4 pl-3 text-white rounded md:bg-transparent md:text-neutral-400 md:p-0 dark:text-white"
          data-testid={href}
        >
          {title}
        </a>
      </Link>
    </li>
  );
}
