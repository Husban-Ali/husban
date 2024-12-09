import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
const links = [
  { path: "/", name: "home" },
  { path: "/projects", name: "projects" },
  { path: "/contacts", name: "contacts" },
];

export const Nav = ({
  containerStyles,
  linkStyles,
  underlineStyles,
  onNavClick,
}) => {
  const path = usePathname();
  return (
    <div className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`capitalize ${linkStyles}`}
            onClick={onNavClick}
          >
            {link.path === path && (
              <motion.span
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                transition={{ type: "tween" }}
                layoutId="underline"
                className={`${underlineStyles}`}
              />
            )}

            {link.name}
          </Link>
        );
      })}
    </div>
  );
};
