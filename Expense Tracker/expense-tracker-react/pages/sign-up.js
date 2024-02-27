import { Buttons } from "./components/Buttons";
import { Inputs } from "./components/Inputs";

export default function Home() {
  return (
    <div className="flex flex-col p-2 gap-2 w-10/12 mx-auto">
      <Inputs className="name" placeholder="Name" type="text" />
      <Inputs className="email" placeholder="Email" type="text" />
      <Inputs className="password" placeholder="Password" type="text" />
      <Inputs className="password" placeholder="Re-Password" type="text" />

      <div className="inline-block px-4 py-2">
        <button class="btn w-64 rounded-full">Sign-Up</button>
      </div>
      
      <div className="inline-block px-4 py-2">
        <Buttons label={"Sign-Up"} />
      </div>
    </div>
  );
}
