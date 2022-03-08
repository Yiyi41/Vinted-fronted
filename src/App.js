import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Signup from "./pages/Signup";
import Header from "./components/Header";
import Signin from "./pages/Signin";
import Publish from "./pages/Publish";
import Payment from "./pages/Payment";
import NotFound from "./pages/NotFound";

import Cookies from "js-cookie";
import { useState } from "react";

function App() {
  const [token, setToken] = useState(Cookies.get("userToken" || null));

  const setUser = (token) => {
    if (token) {
      Cookies.set("userToken", token, { expires: 10 });
    } else {
      Cookies.remove("userToken");
    }
    setToken(token);
  };
  return (
    <div className="container">
      <Router>
        <Header
          setUser={setUser}
          token={token}
       
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home
              />
            }
          />
          <Route path="/offer/:id" element={<Offer token={token} />} />
          <Route path="/signup" element={<Signup setUser={setUser} />} />
          <Route path="/signin" element={<Signin setUser={setUser} />} />
          <Route path="/publish" element={<Publish token={token} />} />
          <Route path="/payment" element={<Payment token={token} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
