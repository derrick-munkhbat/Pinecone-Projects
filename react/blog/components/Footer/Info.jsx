import {About} from "@/components/Footer/About";
import {Link} from "@/components/Footer/Link";
import {SocialLogos} from "@/components/Footer/SocialLogos";





export function Info() {
    return (
        <div className="flex items-center gap-5 bg-orange-200 justify-between">

        <About/>
        <Link/>
        <SocialLogos/>
    
      </div>
    );
  }