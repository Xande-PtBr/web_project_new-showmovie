import { Link } from "react-router-dom";
import "./Header.css";
import Nav from "../Nav/Nav";

function Header() {
  return (
    <header>
      <div className="header" img src="../images/pipoca.jpeg">
        <Link className="header__logo" to="/">
          Show movies
        </Link>
        <Nav />
      </div>
    </header>
  );
}

export default Header;
