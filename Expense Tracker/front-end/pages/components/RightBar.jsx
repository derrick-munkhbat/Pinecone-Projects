import { Cards } from "./Cards";

export function RightBar() {
  return (
    <div className="flex p-4 relative">
      <div className="overflow-x-auto">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  );
}
