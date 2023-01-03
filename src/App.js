import "./styles/App.css";
import MenuNav from "./components/MenuNav";
import AboutMe from "./components/AboutMe";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import ContactMe from "./components/ContactMe";

function App() {
  return (
    <Router>
      <div className="fondo" />
      <MenuNav />
      <div className="gradiente">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<AboutMe />} />
          <Route exact path="/contact" element={<ContactMe />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
