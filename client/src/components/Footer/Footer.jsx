import React from "react";
import styles from "./Footer.module.css";


import linkedinIcon from "../../icontypes/Linkedin.png";
import twitterIcon from "../../icontypes/Twitter.png";
import facebookIcon from "../../icontypes/Facebook.png";

const Footer = () => {
  const linkedinUrl = "https://www.linkedin.com/in/tu-linkedin";
  const twitterUrl = "https://www.twitter.com/tu-twitter";
  const facebookUrl = "https://www.facebook.com/tu-facebook";
  const appName = "App Pokemon";
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.iconContainer}>
      <p className={styles.app}>{appName}</p>
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
          <img className={styles.icon} src={linkedinIcon} alt="LinkedIn" />
        </a>
        <a href={twitterUrl} target="_blank" rel="noopener noreferrer">
          <img className={styles.icon} src={twitterIcon} alt="Twitter" />
        </a>
        <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
          <img className={styles.icon} src={facebookIcon} alt="Facebook" />
        </a>
        
      <p className={styles.copyright}>© {currentYear} All rights reserved.</p>
      </div>
      
    </footer>
  );
};

export default Footer;