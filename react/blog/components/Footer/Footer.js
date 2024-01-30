
import { Info } from "@/components/Footer/Info";
import { Copyright} from "@/components/Footer/Copyright";

export function Footer() {
    return (
      <div className="flex flex-col gap-5  bg-orange-200 rounded-2xl">

          <Info/>
          <Copyright/>
    
      </div>
    );
  }