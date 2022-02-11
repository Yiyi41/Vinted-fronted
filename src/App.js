import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Offer from "./pages/offer";
import Signup from "./pages/Signup";
import Header from "./components/Header";
import Signin from "./pages/Signin";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Offer/:id" element={<Offer />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
