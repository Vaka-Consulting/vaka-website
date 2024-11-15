import { Menu, Logo } from "@/components";
import { OnClickScrollToAnchor } from "@/utils";
import { clsx } from "clsx";

export function Header({ className }: { className: string }) {
  return (
    <div
      className={clsx(
        className,
        "flex items-center justify-center py-4 flex-col md:flex-row",
      )}
    >
      <a href="#hero" onClick={OnClickScrollToAnchor}>
        <Logo className="w-[125px]" />
      </a>
      <nav className="mt-3 md:mt-0">
        <Menu />
      </nav>
    </div>
  );
}

export default Header;
