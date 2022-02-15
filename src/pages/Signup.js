import axios from "axios";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

const Signup = ({ setUser }) => {
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
      // const token = response.data.token;
      //stock token dans cookie pour que quand le serveur va demander le token sans que j'ai besoin de me reconnecter(quand je dois poster une offre sur le site )
      // Cookies.set("token", token);
      if (response.data.token) {
        setUser(response.data.token);
        navigate("/");
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div className="signin-up">
      <form onSubmit={handleSubmit}>
        <h1>S'inscrire</h1>
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
        <input className="input" type="submit" value="Envoyer" />
      </form>
    </div>
  );
};

export default Signup;
