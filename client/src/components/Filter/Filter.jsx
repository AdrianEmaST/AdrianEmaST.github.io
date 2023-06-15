import React from "react";
import { useDispatch } from "react-redux";
import {
  filterByApi,
  filterByDb,
  sortByAttack,
  sortByName,
} from "../../redux/actions";
import style from "./Filter.module.css";

const Filter = () => {
  const dispatch = useDispatch();
  //Creamos el evento del click, dispachamos la acción a la store de redux para filtrar.
  const clickHanlderDb = () => {
    dispatch(filterByDb());
  };
  //Creamos el evento del click, dispachamos la acción a la store de redux para filtrar.
  const clickHanlderApi = () => {
    dispatch(filterByApi());
  };
  //Creamos el evento del click, dispachamos la acción a la store de redux para filtrar.
  const clickHandlerAttack = (e) => {
    dispatch(sortByAttack(e.target.value));
  };
  //Creamos el evento del click, dispachamos la acción a la store de redux para filtrar.
  const clickHandlerName = (e) => {
    dispatch(sortByName(e.target.value));
  };

  return (
    <div className={style.container}>
      <button className={style.button} onClick={clickHanlderApi}>
        Filter Api
      </button>
      <button className={style.button} onClick={clickHanlderDb}>
        Filter Create
      </button>
      <button
        className={style.button}
        value="desc"
        onClick={clickHandlerAttack}
      >
        -ATCK
      </button>
      <button className={style.button} value="asc" onClick={clickHandlerAttack}>
        +ATCK
      </button>
      <button className={style.button} value="asc" onClick={clickHandlerName}>
        A-Z
      </button>
      <button className={style.button} value="desc" onClick={clickHandlerName}>
        Z-A
      </button>
    </div>
  );
};
export default Filter;
