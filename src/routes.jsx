import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main/Main";
import Filme from "./components/Filme/Filme";
import Header from "./components/Header/Header";
import Erro from "./components/Erro/Erro";
import Favorito from "./components/Favorito/Favorito";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/filme/:id" element={<Filme />} />
        <Route path="/favorito" element={<Favorito />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Erro />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default RoutesApp;
