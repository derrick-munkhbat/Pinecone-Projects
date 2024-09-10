import { menuItems } from "@/data/menuItem";
import { Logo } from "./icon/Logo";
import { MainMenu } from "./MainMenu";
import { ThemeChanger } from "./ThemeChanger";

export function Header() {
  return (
    <div className="border-2 rounded flex justify-between p-4 items-center dark:white">
      <Logo />
      <MainMenu items={menuItems} />
      <div className="lg:flex gap-5 items-center">
        <ThemeChanger />

        <a
          href="./images/profile-portrait.jpg"
          download="profile-portrait.jpg"
          className="bg-black text-white rounded p-0 px-4 py-2 dark:bg-white dark:text-black"
        >
          <h1>Download CV</h1>
        </a>
      </div>
    </div>
  );
}
