import { Menu, Logo } from "@/components";

export function Header() {
  return (
    <div className="flex items-center justify-center py-5">
      <a href="#">
        <Logo className="mr-4" />
      </a>
      <Menu />
    </div>
  );
}

export default Header;
