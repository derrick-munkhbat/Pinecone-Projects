import { Switch } from "./icon";
import { Logo } from "./icon/Logo";
import { Menu } from "./icon/Menu";
import { MenuItems } from "./MenuItems";

export function Header() {
  const menuItems = [
    { label: "About me", link: "/about" },
    { label: "Work", link: "/work" },
    { label: "Testimonials", link: "/testimonials" },
    { label: "Contact", link: "/contact" },
  ];

  
   

  return (
    <div className="border-2 flex justify-between p-4 items-center">
      <Logo />
      <div className="sm: flex sm:hidden">
        <Menu />
      </div>
      <MenuItems items={menuItems} />
      <div className="hidden sm:flex">
        <button>< Switch /></button>
        <div className=" inline-block px-4 py-2 bg-black rounded-full text-white">
            <h1>Download CV</h1>
        </div> 
    </div>
    </div>
  );

  
}


