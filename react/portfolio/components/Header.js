import { Logo } from "./icon/Logo";
import { Menu } from "./icon/Menu";


export function Header(){
    return (
        <div className="border-2 flex justify-between p-4 items-center">
        < Logo />
        <div className="sm: flex md:hidden">
            < Menu />
        </div>    
        <div className="hidden md:flex justi">
            <p>home</p>
            <p>home</p>
            <p>home</p>
            <p>home</p>
            <p>home</p>
            <p>home</p>
        </div>
    </div>
    );
  }

