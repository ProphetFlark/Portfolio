import React from "react";
import "../styles/MenuNav.css";
import { Link } from "react-router-dom";

const MenuNav = () => {
  return (
    <div className="divTotal">
      <nav>
        <h1 className="logo">CRP</h1>
        <ul>
          <li>
            <Link to="/" className="link">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/about" className="link">
              ¿Quién soy?
            </Link>
          </li>
          <li>
            <Link to="/contact" className="link">
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
      <div className="lineNav"></div>
    </div>
  );
};

export default MenuNav;
