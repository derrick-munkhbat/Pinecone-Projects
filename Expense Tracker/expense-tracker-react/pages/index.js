import { Buttons } from "./components/Buttons";

export default function Home() {
  return (
    <main className="mx auto 0">
      <h1>Sign-in </h1>

      <label className="input input-bordered flex items-center gap-2">
        <input type="text" className="name" placeholder="Email" />
      </label>

      <label className="input input-bordered flex items-center gap-2">
        <input type="text" className="grow" placeholder="Password" />
      </label>

      <Buttons label={"Sign-In"} />
    </main>
  );
}
