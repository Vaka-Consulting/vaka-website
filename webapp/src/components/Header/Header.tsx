import { Menu, Logo } from "@/components";
// import { Bars3Icon } from "@heroicons/react/24/solid";

export function Header() {
  return (
    <div className="flex items-center justify-center py-5">
      <a href="#">
        <Logo className="w-[150px] md:w-[125px]  mr-4" />
      </a>
      <nav className="hidden sm:block">
        <Menu />
      </nav>
    </div>
  );
}

export default Header;
