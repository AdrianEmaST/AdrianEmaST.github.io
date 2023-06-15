import React from "react";
import styles from "./AboutMe.module.css";
import Facherito from "../../img/Facherito.jpeg";
import Footer from "../Footer/Footer";

const AboutMe = () => {
  return (
    <div className={styles.contain}>
      <aside className={styles.profileCard}>
        <header>
          <a href="https://github.com/AdrianEmaST/PI-Pokemon">
            <img src={Facherito} className="hoverZoomLink" alt="" />
          </a>

          <h1>Adrián Sánchez</h1>

          <h2>Henry Students</h2>
        </header>

        <div className={styles.profileBio}>
          <p>
            Soy estudiante de full stack en Soy Henry, estre es mi primer
            Proyecto Individual con temática de ¡Pokemon!
          </p>
        </div>
      </aside>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default AboutMe;
