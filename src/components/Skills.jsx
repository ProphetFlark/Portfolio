import React from "react";
import "../styles/Skills.css";

const Skills = () => {
  const tecnologias = [
    {
      nombre: "HTML",
      imgurl: "https://cdn.svgporn.com/logos/html-5.svg",
      stars: "★★★★★᠎᠎᠎᠎",
    },
    {
      nombre: "CSS",
      imgurl: "https://cdn.svgporn.com/logos/css-3.svg",
      stars: "★★★★★",
    },
    {
      nombre: "JavaScript",
      imgurl:
        "https://upload.wikimedia.org/wikipedia/commons/d/d4/Javascript-shield.svg",
      stars: "★★★★☆",
    },
    {
      nombre: "React JS",
      imgurl: "https://cdn.svgporn.com/logos/react.svg",
      stars: "★★★☆☆",
    },
    {
      nombre: "Python",
      imgurl: "https://cdn.svgporn.com/logos/python.svg",
      stars: "★★★★☆",
    },
    {
      nombre: "MySQL",
      imgurl: "https://cdn.svgporn.com/logos/mysql.svg",
      stars: "★★★★☆",
    },
    {
      nombre: "PHP",
      imgurl: "https://cdn.svgporn.com/logos/php.svg",
      stars: "★★★☆☆",
    },
    {
      nombre: "C++",
      imgurl: "https://cdn.svgporn.com/logos/c-plusplus.svg",
      stars: "★★★★☆",
    },
    {
      nombre: "Illustrator",
      imgurl: "https://cdn.svgporn.com/logos/adobe-illustrator.svg",
      stars: "★★★★★",
    },
    {
      nombre: "Photoshop",
      imgurl: "https://cdn.svgporn.com/logos/adobe-photoshop.svg",
      stars: "★★★★☆",
    },
    {
      nombre: "After Effects",
      imgurl: "https://cdn.svgporn.com/logos/adobe-after-effects.svg",
      stars: "★★★★☆",
    },
    {
      nombre: "Office",
      imgurl:
        "https://upload.wikimedia.org/wikipedia/commons/5/5f/Microsoft_Office_logo_%282019%E2%80%93present%29.svg",
      stars: "★★★★★",
    },
  ];

  return (
    <>
      <div className="aboutPadre">
        <div className="sobremi">
          <p>Habilidades</p>
          <div className="cuadrosPadre">
            {tecnologias.map(({ nombre, imgurl, stars }) => {
              return (
                <div className="cuadroHijo">
                  <div className="imgHijo">
                    <img src={imgurl} alt={nombre} />
                  </div>
                  <h2>{nombre}</h2>
                  <div className="starsHijo">
                    <p>{stars}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
