import React from "react";
import s from "./Landing.module.css";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className={s.container}>
      <div className={s.landing}>
        <Link to="/home">
          <button className={s.landingBtn}>Go pokemon!</button>
        </Link>
      </div>
      <div className={s.loadingApp}>
        <h4>Loading Pokemon App...</h4>
      </div>
    </div>
  );
};

export default Landing;
