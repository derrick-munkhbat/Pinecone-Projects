import { MenuDots } from "./MenuDots";




export function MainMenu() {
  return (
    <>
      <div className="flex gap-8 max-md:hidden">
        <button>Home</button>
        <button>Blog</button>
        <button>Contact</button>
      </div>
      <button className="md:hidden">
        <MenuDots />
      </button>
    </>
  );
}
