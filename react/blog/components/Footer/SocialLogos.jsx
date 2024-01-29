import {Fb} from "@/components/icons/Fb";
import {Twitter} from "@/components/icons/Twitter";
import {Ig} from "@/components/icons/Ig";
import {In} from "@/components/icons/In";


export function SocialLogos() {
    return (
      <div className="flex justify-start items-center gap-50 gap-10">
        <Fb/>
        <Twitter/>
        <Ig/>
        <In/>
      </div>
    );
  }