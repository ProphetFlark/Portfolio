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
            <form name="contact" method="post" data-netlify="true">
              <input type="hidden" name="form-name" value="contact" />
              <label>
                Nombre:
                <input type="text" name="name" placeholder="Tu nombre" />
              </label>
              <label>
                Correo Electrónico:
                <input
                  type="email"
                  name="email"
                  placeholder="Tu correo electrónico"
                />
              </label>
              <label>
                Mensaje:
                <textarea
                  name="message"
                  placeholder="Escríbeme algo..."
                  style={{ height: "200px" }}
                  defaultValue={""}
                />
              </label>
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
