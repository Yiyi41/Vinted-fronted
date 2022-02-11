import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/img/logo.svg";
import "./Header.css";

const Header = ({ setUser, token }) => {
  const navigate = useNavigate();
  return token ? (
    <div className="header">
      <img src={logo} alt="" />
      <input
        className="research"
        type="text"
        placeholder="Rechercher des articles"
      />
      <button
        onClick={() => {
          setUser(null);
          navigate("/home");
        }}
      >
        Se Déconnecter
      </button>
    </div>
  ) : (
    <div className="header">
      <img src={logo} alt="" />
      <input
        className="research"
        type="text"
        placeholder="Rechercher des articles"
      />
      <div className="header-signin-signup">
        <Link to={"/signup"}>S'inscrire</Link>
        <Link to={"/signin"}>Se connecter</Link>
      </div>
      <button className="vendre">Vends maintenant</button>
    </div>
  );
};

export default Header;
