import { MdOutlineWbSunny } from "react-icons/md";
import { LuMoonStar } from "react-icons/lu";
import { useEffect, useState } from "react";

export function ThemeChanger() {
    const [theme, setTheme] = useState("light");

    function changeTheme(){
        if (theme === "light"){
            setTheme("dark");
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme","dark");
        }
        else {
            setTheme("light");
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme","light");
        }
    }

useEffect(()=>{
    const localTheme=localStorage.getItem("theme");
    setTheme(localTheme);
    document.documentElement.classList.add(localTheme);

},[]);

  return (

    <button onClick={changeTheme}>
        {theme === "light" && <MdOutlineWbSunny/>}
        {theme === "dark" && <LuMoonStar/>}
    </button>
  );

  
}


