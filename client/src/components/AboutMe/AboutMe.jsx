import React from 'react';
import styles from './AboutMe.module.css'
import Facherito from "../../img/Facherito.jpeg"
import Footer from '../Footer/Footer';

const AboutMe = () => {
  return (
    <div className={styles.contain}>
    <aside className={styles.profileCard}>
      <header>
        {/* here’s the avatar */}
        <a target="_blank" href="https://github.com/AdrianEmaST/PI-Pokemon">
          <img src={Facherito} className="hoverZoomLink" />
        </a>

        {/* the username */}
        <h1>
          Adrián Sánchez
        </h1>

        {/* and role or location */}
        <h2>
          Henry Students
        </h2>

      </header>

      {/* bit of a bio; who are you? */}
      <div className={styles.profileBio}>

        <p>
          Soy estudiante de full stack en Soy Henry, estre es mi primer Proyecto Individual con temática de ¡Pokemon!
        </p>
      </div>
    </aside>
    <div className={styles.footer}>
    <Footer />
    </div>
    
    </div>
  );
}

export default AboutMe;