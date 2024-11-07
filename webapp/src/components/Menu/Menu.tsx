import { MouseEvent } from "react";

const menuItems = [
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "Get in touch", href: "#contact" },
];

const classNames = `before:content-['---'] before:mr-4 mr-4`;

export function Menu() {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");

    if (href && href.startsWith("#")) {
      const id = href.substring(1);
      const yOffset = -60;
      const containerElement = document.getElementById(id);
      const yCoordinates = containerElement
        ? containerElement.getBoundingClientRect().top +
          window.scrollY +
          yOffset
        : 0;

      window.scrollTo({ top: yCoordinates, behavior: "smooth" });
    }
  };
  return (
    <ul className="flex">
      {menuItems.map((item) => (
        <li key={item.name} className={classNames}>
          <a href={item.href} onClick={handleClick}>
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Menu;
