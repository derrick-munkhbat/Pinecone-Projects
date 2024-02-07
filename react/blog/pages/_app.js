import "@/styles/globals.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import index from './pages/index'
import blog from "./blog";
import contact from "./contact";
import nopage from "@/pages/nopage";
import Index from ".";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;

  <div>
    <BrowserRouter>
      <Routes>
        <Route index element={<Index />} />
        <Route path="/blog" element={<blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<nopage />} />
      </Routes>
    </BrowserRouter>
  </div>;
}
