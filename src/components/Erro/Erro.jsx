import { Link } from "react-router-dom";
import "./Erro.css";

function Erro() {
  return (
    <div className="erro__not-found">
      <h1>404</h1>
      <h2>Página não encontrada</h2>
      <Link to="/">Veja todos os filmes</Link>
    </div>
  );
}

export default Erro;
