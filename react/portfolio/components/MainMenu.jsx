import { useState } from "react";
import { Menu } from "./icon/Menu";

export function MainMenu({ items }) {
  return (
    <div>
      <div className="hidden lg:flex">
        {items.map((item) => (
          <a key={item.id} a className="px-4 py-2" href={item.link}>
            {item.label}
          </a>
        ))}
      </div>
      
      <MobileMenu />
      
    </div>
      

  );
}


function MobileMenu(){
  const [visible, setVisible] = useState(false);

  // let open = false;

  function openMenu(){
    // open=true;
    setVisible(true);
  }

  function closeMenu(){
    // open=false;
    setVisible(false);
  }

  return (
  <>
    <button className="flex lg:hidden" onClick={openMenu}>
      <Menu />
    </button>
    {
      visible && <div className="fixed bg-slate-400/70 inset-0"></div>
    }
    
    <div className={`fixed top-0 bottom-0 w-3/4 transition-all bg-white ${visible ? "right-0": "-right-full"}`}>
      <div className="p-8 text-2xl">Mobile Menu</div>
      <button onClick={closeMenu}>close</button>
    </div>
  </>
  )
}



