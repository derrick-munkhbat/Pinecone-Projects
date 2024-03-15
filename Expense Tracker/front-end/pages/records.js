import { LeftBar } from "../components/LeftBar";
import { RightBar } from "../components/RightBar";

export default function Home() {
  return (
    <div className="flex p-5">
      <div>
        <LeftBar />
      </div>

      <div>
        <RightBar />
      </div>
    </div>
  );
}
