import { useScrollToContent } from "@/hooks/useScrollToContent";
import { clsx } from "clsx";

const menuItems = [
  { id: "about", name: "About", href: "#about" },
  { id: "work", name: "Work", href: "#work" },
  { id: "contact", name: "Get in touch", href: "#contact" },
];

const dividerClassNames = `before:content-dividerHorizontal before:mx-4 sm:before:mx-6 md:before:mx-8 before:inline-block before:top-[-4px] before:relative before:w-[17px] first:before:hidden md:first:before:inline-block`;

export function Menu() {
  const { activeItem, scrollToContent } = useScrollToContent();

  return (
    <ul className="flex">
      {menuItems.map((item) => (
        <li key={item.name} className={dividerClassNames}>
          <a
            className={clsx({ active: activeItem === item.id }, "link")}
            href={item.href}
            onClick={scrollToContent}
          >
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Menu;
