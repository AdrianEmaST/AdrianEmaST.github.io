import React from "react";
import style from "../Loader/Loader.module.css";
import gif from "../../img/loadingGif.gif"

const Loader = () => {
  return (
    <div className={style.main}>
      <img className={style.img} src={gif} alt="gif"></img>
    </div>
  );
};

export default Loader;