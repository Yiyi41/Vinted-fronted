import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <Link to={"/signup"}>
        <button>S'inscrire</button>
      </Link>
      <Link to={"/signin"}>
        <button>Se connecter</button>
      </Link>
    </header>
  );
};

export default Header;
