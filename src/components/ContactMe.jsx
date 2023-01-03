import React from "react";
import "../styles/ContactMe.css";
import Footer from "./Footer";

const ContactMe = () => {
  return (
    <>
      <div className="aboutPadre">
        <div className="sobremi">
          <p>Contáctame</p>
          <div className="container">
            <form name="formulario-portfolio" method="POST" data-netlify="true">
              <label htmlFor="fname">Nombre: </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Tu nombre"
              />
              <label htmlFor="lname">Correo Electrónico:</label>
              <input
                type="email"
                name="email"
                placeholder="Tu correo electrónico"
              />

              <label htmlFor="subject">Mensaje:</label>
              <textarea
                id="message"
                name="message"
                placeholder="Escríbeme algo..."
                style={{ height: "200px" }}
                defaultValue={""}
              />
              <div className="submitsub">
                <input type="submit" defaultValue="Enviar" />
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactMe;
