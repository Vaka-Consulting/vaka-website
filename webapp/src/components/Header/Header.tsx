import { Menu, Logo } from "@/components";
// import { Bars3Icon } from "@heroicons/react/24/solid";

export function Header() {
  return (
    <div className="flex items-center justify-center py-4 flex-col md:flex-row">
      <a href="#">
        <Logo className="w-[125px]" />
      </a>
      <nav className="mt-3 md:mt-0">
        <Menu />
      </nav>
    </div>
  );
}

export default Header;
