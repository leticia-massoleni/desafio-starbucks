import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./Components/Header/Header";
import Sobre from "./Components/Sobre/Sobre";
import Home from "./Components/Home/Home";
import Novidades from "./Components/Novidades/Novidades";

import GlobalCSS from "./globalCSS";

export default function App(){
  return(
    <>
    <GlobalCSS/>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path = "/" element={<Home/>}/>
      <Route path = "/novidades" element={<Novidades/>}/>
      <Route path = "/sobre" element={<Sobre/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}