import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonName } from "../../redux/actions";
import style from "./SearchBar.module.css";


export default function SearchBar() {
  const dispatch = useDispatch();
  //creamos el estado name para almacenar la entrada de texto y actualizarla
  const [name, setName] = useState("")
  //Actualizamos el valor del estado name cuando cambia la entrada de texto
  const handleInputChange = (e) => {
    e.preventDefault()
    setName(e.target.value);
  };
  //cuando submiteamos manda el name para obtenerla a traves de getPokemonName
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getPokemonName(name))
  }

  return (
    <div>
      <input
        className={style.search}
        type="text"
        onChange= {(e) => handleInputChange(e)}
        placeholder="Buscar pokemon..."
      />
      <button className ={style.boton} type="submit" onClick= {(e) => handleSubmit(e)}> Buscar </button>
    </div>
  );
}