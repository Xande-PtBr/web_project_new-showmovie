import { Link } from "react-router-dom";
import "../Nav/Nav.css";

function Nav() {
  return (
    <nav className="nav">
      <div className="nav__container-butoons">
        <Link className="nav__botao-favorito" to="/favorito">
          Meus Filmes
        </Link>

        <Link className="nav__botao-about" to="/about">
          About
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
