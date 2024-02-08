// import Link from "next/link";
import Link from "next/link";
import { MenuDots } from "./MenuDots";

export function MainMenu() {
  return (
    <>
      <div className="flex gap-8 max-md:hidden">
        <Link href="/">Home</Link>
        <Link href="/articles/blog">Blog</Link>
        <Link href="/articles/contact">Contact</Link>
      </div>
      <button className="md:hidden">
        <MenuDots />
      </button>
    </>
  );
}
