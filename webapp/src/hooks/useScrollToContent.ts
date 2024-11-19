import { MouseEvent, useCallback, useEffect, useState, useRef } from "react";

interface Section {
  id: string;
  top: number;
  bottom: number;
}

const OFFSET = 60;

export const useScrollToContent = () => {
  const [activeItem, setActiveItem] = useState<string | undefined>(undefined);
  const sectionsRef = useRef<Section[]>([]);

  const getSections = useCallback((): Section[] => {
    return Array.from(document.querySelectorAll("#main [id]")).map(
      (section) => {
        const { id, offsetTop, clientHeight } = section as HTMLElement;
        return {
          id,
          top: offsetTop - OFFSET,
          bottom: offsetTop + clientHeight - OFFSET,
        };
      },
    );
  }, []);

  const findActiveSection = useCallback(
    (scrollPosition: number): string | undefined => {
      return sectionsRef.current.find(
        ({ top, bottom }) => scrollPosition >= top && scrollPosition < bottom,
      )?.id;
    },
    [],
  );

  const scrollToElement = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yCoordinate =
        element.getBoundingClientRect().top + window.scrollY - OFFSET;
      window.scrollTo({ top: yCoordinate, behavior: "smooth" });
      setActiveItem(id);
    }
  }, []);

  const scrollToContent = useCallback(
    (event: MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      const href = event.currentTarget.getAttribute("href");
      if (href?.startsWith("#")) {
        scrollToElement(href.substring(1));
      }
    },
    [scrollToElement],
  );

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    const newActiveItem = findActiveSection(scrollPosition);
    if (newActiveItem !== activeItem) {
      setActiveItem(newActiveItem);
    }
  }, [activeItem, findActiveSection]);

  useEffect(() => {
    sectionsRef.current = getSections();
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Set initial active section
    return () => window.removeEventListener("scroll", handleScroll);
  }, [getSections, handleScroll]);

  return { scrollToContent, activeItem };
};
