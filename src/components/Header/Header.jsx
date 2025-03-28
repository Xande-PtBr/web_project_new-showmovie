import { Link } from "react-router-dom";
import "../Header/Header.css";
import Nav from "../Nav/Nav";

function Header() {
  return (
    <header>
      <div className="header">
        {" "}
        <Nav />
        <Link className="header__logo" to="/">
          Show movies
        </Link>
      </div>
    </header>
  );
}

export default Header;
