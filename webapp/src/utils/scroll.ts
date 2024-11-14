import { MouseEvent } from "react";

export const OnClickScrollToAnchor = (event: MouseEvent<HTMLAnchorElement>) => {
  event.preventDefault();
  const href = event.currentTarget.getAttribute("href");

  if (href && href.startsWith("#")) {
    const id = href.substring(1);
    const yOffset = -60;
    const containerElement = document.getElementById(id);
    const yCoordinates = containerElement
      ? containerElement.getBoundingClientRect().top + window.scrollY + yOffset
      : 0;

    window.scrollTo({ top: yCoordinates, behavior: "smooth" });
  }
};
