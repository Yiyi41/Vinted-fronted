import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/img/logo.svg";
import "./Header-Hero.css";

// props:
// setUser : func for changing user state
// token : String, authentification token
// filterText: String , string to filter in search
const Header = ({
  setUser,
  token,
  //   filterText,
  //   setFilterText,
  //   sortType,
  //   setSortType,
  //   priceMin,
  //   setPriceMin,
  //   priceMax,
  //   setPriceMax,
}) => {
  const navigate = useNavigate();

  return token ? (
    <div className="header">
      <img src={logo} alt="" />

      <input
        className="research"
        type="text"
        placeholder="Rechercher des articles"
        // onChange={(event) => {
        //   setFilterText(event.target.value); // le texte tapé
        // }}
      />
      <button
        className="singout-button"
        onClick={() => {
          setUser(null);
          navigate("/"); // si deconnection on retourne sur home
        }}
      >
        Se Déconnecter
      </button>
      <Link to={"/publish"} className="vendre">
        Vends maintenant
      </Link>
    </div>
  ) : (
    <div className="header">
      <img src={logo} alt="" />
      <input
        className="research"
        type="text"
        placeholder="Rechercher des articles"
        // onChange={(event) => {
        //   setFilterText(event.target.value);
        // }}
      />
      <div className="header-signin-signup">
        <Link to={"/signup"}>S'inscrire | &nbsp; </Link>
        <Link to={"/signin"}> Se connecter</Link>
      </div>
      {/* <Link to={"/publish"} className="vendre">
        Vends maintenant
      </Link> */}
      <button
        className="vendre"
        onClick={() => {
          navigate("/signin");
        }}
      >
        Vends maintenant
      </button>
    </div>
  );
};

export default Header;
