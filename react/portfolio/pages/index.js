import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Location } from "@/components/icon/Location";
import { Dot } from "@/components/icon/Dot";
import { Kitty } from "@/components/icon/Kitty";
import { Birdy } from "@/components/icon/Birdy";
import { Hug } from "@/components/icon/Hug";



export default function Home() {
  return (
    <div className="p-3">
      <Header />

      <div className="border-2 justify-center flex mt-10">
        <img src="/images/profile.jpg" alt="profile"/>
      </div>

      <div className="mt-5">
        <h2 className="text-4xl">Hi, I’m Sagar 👋</h2>
        <p className="text-base mt-2 text-slate-500 text-justify">I'm a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 7 years, I still love it as if it was something new.</p>
      </div>

      <div className="flex items-center mt-10">
        < Location />
        <p className= "text-slate-500">Ahmedabad, India</p>
      </div>

      <div className="flex items-center ">
        < Dot />
        <p className= "text-slate-500">Available for new projects</p>
      </div>

      <div className=" flex mt-8">
        < Kitty />
        < Birdy />
        < Hug />
      </div>
      
      

      <Footer />
    </div>
  )
}





