import { menuItems } from "@/data/menuItem";
import { Switch } from "./icon";
import { Logo } from "./icon/Logo";
import { Menu } from "./icon/Menu";
import { MainMenu } from "./MainMenu";


export function Header() {
  return (
    <div className="border-2 flex justify-between p-4 items-center">
      <Logo />
      <div className="flex lg:hidden">
        <Menu />
      </div>
      
      <div className="hidden lg:flex">
        <MainMenu items={menuItems} />
        <button>< Switch /></button>
        <a href="./images/profile-portrait.jpg" download className=" inline-block px-4 py-2 bg-black rounded-full text-white dark:bg-white dark:text-black">
            <h1>Download CV</h1>
        </a> 
      </div>
    </div>
  );

  
}


