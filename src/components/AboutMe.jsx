import React from "react";
import "../styles/AboutMe.css";
import foto from "../images/profile.png";
import pdf from "../images/Cristopher_Paiz_CV.pdf";

const AboutMe = () => {
  return (
    <div className="aboutPadre">
      <div className="sobremi">
        <p>Sobre mí</p>
      </div>
      <div className="divImag">
        <img src={foto} />
      </div>
      <div className="divParr">
        <p>
          Me llamo Cristopher Paiz y soy de Quetzaltenango, Guatemala. Soy un
          desarrollador junior con una pasión por la tecnología y el aprendizaje
          constante. Mi objetivo es utilizar mis habilidades técnicas para
          resolver problemas y ayudar a las personas a alcanzar sus metas.
        </p>
        <p>
          Estoy siempre buscando nuevas oportunidades para aprender y crecer en
          mi carrera, en mi tiempo libre, disfruto participar en proyectos
          personales y colaborar en proyectos de código abierto. Estoy
          emocionado de aplicar mis habiidades y conocimientos para contribuir
          al éxito de una empresa.
        </p>
        <div className="button">
          <a href={pdf} className="fontbutton" target="_blank">
            🡻 ᠎᠎᠎᠎│ DESCARGAR CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
