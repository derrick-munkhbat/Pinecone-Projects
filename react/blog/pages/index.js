import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { Content } from "@/components/Content/Content";


export default function Home() {
  return (

    // MAIN LAYOUT
    <main className="p-2 w-10/12 mx-auto">

      <Header/>
      <Content/>
      <Footer/>
     


      
    </main>
  );
}
