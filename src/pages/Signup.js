import axios from "axios";
import { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsLetter, setNewsLetter] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(username, email, password);
    try {
      const response = await axios.post(
        " https://lereacteur-vinted-api.herokuapp.com/user/signup",
        {
          email: email,
          username: username,
          password: password,
          newsletter: newsLetter,
        }
      );
      //   console.log(response.data);
      const token = response.data.token;
      //je stock token dans ma cookie pour que quand je dois poster une offre sur le site que le serveur va demander le token
      Cookies.set("token", token);
      navigate("/home");
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div>
      <h1>S'inscrire</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nom d'utilisateur"
          name="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
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
        <div>
          <input
            type="checkbox"
            onChange={(event) => setNewsLetter(event.target.checked)}
          />
          <span>S'inscrire à notre newsletter</span>
        </div>
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
};

export default Signup;
