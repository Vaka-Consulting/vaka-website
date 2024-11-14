import { OnClickScrollToAnchor } from "@/utils";

const menuItems = [
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "Get in touch", href: "#contact" },
];

const dividerClassNames = `before:content-dividerHorizontal before:mx-4 sm:before:mx-6 md:before:mx-8 before:inline-block before:top-[-4px] before:relative before:w-[17px] first:before:hidden md:first:before:inline-block`;

export function Menu() {
  return (
    <ul className="flex">
      {menuItems.map((item) => (
        <li key={item.name} className={dividerClassNames}>
          <a href={item.href} onClick={OnClickScrollToAnchor}>
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Menu;
