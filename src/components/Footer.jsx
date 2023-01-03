import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="fondoFoo">
        <div className="redes">
          <div className="red">
            <a href="https://www.facebook.com/choper.paiz" target="_blank">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Facebook_icon_%28black%29.svg"
                alt=""
              />
            </a>
          </div>
          <div className="red">
            <a
              href="https://api.whatsapp.com/send/?phone=50243400213"
              target="_blank"
            >
              <img
                src="https://img.icons8.com/ios-glyphs/512/whatsapp.png"
                alt=""
              />
            </a>
          </div>
          <div className="red">
            <a href="https://github.com/ProphetFlark" target="_blank">
              <img src="https://cdn.svgporn.com/logos/github-icon.svg" alt="" />
            </a>
          </div>
        </div>
        <div className="textoFoo">
          <p>Cristopher Paiz - 2023</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
