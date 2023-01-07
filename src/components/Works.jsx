import React from "react";
import "../styles/Works.css";
import climafoto from "../images/clima.png";
import portfolioFoto from "../images/porfolio.png";
import galeriaFoto from "../images/galeria.png";

const Works = () => {
  const githubsvg = "https://cdn.svgporn.com/logos/github-icon.svg";

  const works = [
    {
      nombre: "App Clima",
      tecno: "HTML+CSS+ReactJS",
      url: "https://clima-crp.netlify.app",
      img: climafoto,
      github: "https://github.com/ProphetFlark/app-clima-reactJS",
    },
    {
      nombre: "Portfolio",
      tecno: "HTML+CSS+ReactJS",
      url: "https://crpaiz.netlify.app/",
      img: portfolioFoto,
      github: "https://github.com/ProphetFlark/Portfolio",
    },
    {
      nombre: "Galería",
      tecno: "ReactJS",
      url: "https://imagenes-crp.netlify.app/",
      img: galeriaFoto,
      github: "https://github.com/ProphetFlark/galeria-img-react",
    },
  ];

  return (
    <>
      <div className="aboutPadre">
        <div className="sobremi">
          <p>Proyectos</p>

          <div className="cuadrosPadre">
            {works.map(({ nombre, tecno, url, img, github }) => {
              return (
                <a key={nombre} className="linkA" href={url} target="_blank">
                  <div className="cuadroHijoPro">
                    <div className="imgHijoPro">
                      <img src={img} alt={nombre} />
                    </div>
                    <div className="divinfoG">
                      <div className="nombre">
                        <h2>{nombre}</h2>
                        <div className="tecnoPro">
                          <p>{tecno}</p>
                        </div>
                      </div>
                      <div className="github">
                        <a href={github} target="_blank">
                          <img src={githubsvg} />
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;
