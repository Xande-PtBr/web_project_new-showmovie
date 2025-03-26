import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer" img src="../images/pipoca.jpeg">
        <Link className="footer__github-image" to="/">
          © 2025 Alexandre Silva - Desenvolvedor full stack
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
