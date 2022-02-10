import { Link } from "react-router-dom";
import logo from "../assets/img/logo.svg";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="" />
      <input type="text" placeholder="Rechercher des articles" />
      <Link to={"/signup"}>
        <button>S'inscrire</button>
      </Link>
      <Link to={"/signin"}>
        <button>Se connecter</button>
      </Link>
      <Link to="/signin">Vends maintenant</Link>
    </header>
  );
};

export default Header;
