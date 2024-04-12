import { menuItems } from "@/data/menuItem";
import { Logo } from "./icon/Logo";
import { MainMenu } from "./MainMenu";
import { ThemeChanger } from "./ThemeChanger";

export function Header() {
  return (
    <div className="border-2 rounded flex justify-between p-4 items-center dark:white">
      <div className="dark:fill-slate-300">
        <Logo />
      </div>

      <MainMenu items={menuItems} />
      <div className="hidden lg:flex gap-5 items-center">
        <ThemeChanger />
        <a
          href="./derrick-fullstack-developer.pdf"
          download
          className="bg-black text-white rounded p-0 px-4 py-2 dark:bg-white dark:text-black"
        >
          <h1>Download CV</h1>
        </a>
      </div>
    </div>
  );
}
