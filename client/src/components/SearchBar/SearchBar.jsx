import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonName } from "../../redux/actions";
import s from "./SearchBar.module.css";


export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("")
  
  const handleInputChange = (e) => {
    e.preventDefault()
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getPokemonName(name))
  }

  return (
    <div>
      <input
        className={s.search}
        type="text"
        onChange= {(e) => handleInputChange(e)}
        placeholder="Buscar pokemon..."
      />
      <button className ={s.boton} type="submit" onClick= {(e) => handleSubmit(e)}> Buscar </button>
      
    </div>
  );
}