import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Signup from "./pages/Signup";
import Header from "./components/Header";
import Signin from "./pages/Signin";
import Publish from "./pages/Publish";
import NotFound from "./pages/NotFound";
import Cookies from "js-cookie";
import { useState } from "react";

function App() {
  const [token, setToken] = useState(Cookies.get("userToken" || null));
  // const [filterText, setFilterText] = useState("");

  // sorttype et price min max defini en dur pour l'instant
  // const [sortType, setSortType] = useState("price-Asc"); // { "price-Asc", "price-Dsc"}
  // const [priceMin, setPriceMin] = useState(0);
  // const [priceMax, setPriceMax] = useState(999999999999);

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
          // filterText={filterText}
          // setFilterText={setFilterText}
          // sortType={sortType}
          // setSortType={setSortType}
          // priceMin={priceMin}
          // setPriceMin={setPriceMin}
          // priceMax={priceMax}
          // setPriceMax={setPriceMax}
        />
        <Routes>
          <Route
            path="/Home"
            element={
              <Home
              // filterText={filterText}
              // sortType={sortType}
              // priceMin={priceMin}
              // priceMax={priceMax}
              />
            }
          />
          <Route path="/Offer/:id" element={<Offer />} />
          <Route path="/signup" element={<Signup setUser={setUser} />} />
          <Route path="/signin" element={<Signin setUser={setUser} />} />
          <Route path="/publish" element={<Publish />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
