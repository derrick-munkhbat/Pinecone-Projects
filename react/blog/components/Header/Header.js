import {Logo} from "@/components/icons/Logo";
import {MainMenu} from "@/components/Header/MainMenu";
import {Search} from "@/components/Header/Search";


export function Header() {
    return (
  
      <div className="flex items-center justify-between  bg-orange-200 p-3 rounded-2xl">
        <Logo/>
        <MainMenu/>
        <Search/>
      </div>


    );
  }