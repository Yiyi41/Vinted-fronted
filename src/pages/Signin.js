import "./Signin-up.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Signin = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        {
          email: email,
          password: password,
        }
      );
      console.log(response.data.token);

      // Cookies.set("token", response.data.token);
      // navigate("/home");
      if (response.data.token) {
        setUser(response.data.token);
        navigate("/Home");
      }
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Se connecter</h1>
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          placeholder="Mot de passe"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <input className="input" type="submit" value="Se connecter" />
        <Link className="link" to="/signup">
          Pas encore de compte? Inscris-toi
        </Link>
      </form>
    </div>
  );
};

export default Signin;
