import Link from "next/link";
import PropTypes from "prop-types";
import { useRouter } from 'next/router'

export default function NavItem({id, title, href }) {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <li>
      <Link key={id} href={href}>
        <a
          className={currentRoute === {href} ? 'text-red-500' : "text-black hover:text-red-400"}
          data-testid={href}
        >
          {title}
        </a>
      </Link>
    </li>
  );
}

NavItem.propTypes = {
  title: PropTypes.string,
  href: PropTypes.string,
};
