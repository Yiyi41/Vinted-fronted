import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Offer from "./pages/offer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Offer/:id" element={<Offer />} />
      </Routes>
    </Router>
  );
}

export default App;
