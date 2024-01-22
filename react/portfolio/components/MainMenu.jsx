export function MainMenu({ items }) {
  return (
    <div className="hidden lg:flex">
      {items.map((item) => (
        <a key={item.id} a className="px-4 py-2" href={item.link}>
          {item.label}
        </a>
      ))}
    </div>
  );
}
