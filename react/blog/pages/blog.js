import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { Grid} from "@/components/Content-home/Grid";


export default function Home() {
  return (

    // MAIN LAYOUT
    <>
    <div className="flex flex-col p-2 gap-2 w-10/12 mx-auto">
      <Header/>
      <Grid/>
    </div>
    <div className="bg-gray-200">
      <Footer/>
    </div>
    </>
  );
}
