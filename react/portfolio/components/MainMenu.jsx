

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
  const open = true;
  return (
  <>
    <div className="fixed bg-slate-400/70 inset-0"></div>
    <div className={'bg-white fixed top-0 bottom-0 w-3/4 transition-all ${open ? "right-0": "-right-full"}'}>
      <div className="p-8 text-2xl">Mobile Menu</div>
      <button>close</button>
    </div>
  </>
  )
}

