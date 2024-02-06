import {About} from "@/components/Footer/About";
import {Link} from "@/components/Footer/Link";
import {SocialLogos} from "@/components/Footer/SocialLogos";





export function Info() {
    return (
        <div className="flex items-start justify-evenly gap-10 p-2 max-md:flex-col mx-auto">

        <About/>
        <Link/>
        <SocialLogos/>
    
      </div>
    );
  }