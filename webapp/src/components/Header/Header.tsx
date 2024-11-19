import { Menu, Logo } from "@/components";
import { clsx } from "clsx";
import { useScrollToContent } from "@/hooks/useScrollToContent";

export function Header({ className }: { className: string }) {
  const { scrollToContent } = useScrollToContent();

  return (
    <div
      className={clsx(
        className,
        "flex items-center justify-center py-4 flex-col md:flex-row",
      )}
    >
      <a href="#hero" onClick={scrollToContent}>
        <Logo className="w-[125px]" />
      </a>
      <nav className="mt-3 md:mt-0">
        <Menu />
      </nav>
    </div>
  );
}

export default Header;
