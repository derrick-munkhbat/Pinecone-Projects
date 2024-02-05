
import { Info } from "@/components/Footer/Info";
import { Copyright} from "@/components/Footer/Copyright";

export function Footer() {
    return (
      <div className="flex flex-col gap-5 bg-gray-200 p-5">

          <Info/>
          <Copyright/>
    
      </div>
    );
  }