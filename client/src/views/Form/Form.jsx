import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { validation } from "./validation.js";
import { getTypes } from "../../redux/actions.js";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer.jsx"

import Pokebola from "../../img/Pokebola.png";

import style from "../Form/Form.module.css";

import Bug from "../../icontypes/Bug.png";
import Dark from "../../icontypes/Dark.png";
import Dragon from "../../icontypes/Dragon.png";
import Electric from "../../icontypes/Electric.png";
import Fairy from "../../icontypes/Fairy.png";
import Fighting from "../../icontypes/Fighting.png";
import Fire from "../../icontypes/Fire.png";
import Flying from "../../icontypes/Flying.png";
import Ghost from "../../icontypes/Ghost.png";
import Grass from "../../icontypes/Grass.png";
import Ground from "../../icontypes/Ground.png";
import Ice from "../../icontypes/Ice.png";
import Normal from "../../icontypes/Normal.png";
import Poison from "../../icontypes/Poison.png";
import Psychic from "../../icontypes/Psychic.png";
import Rock from "../../icontypes/Rock.png";
import Shadow from "../../icontypes/Shadow.png";
import Steel from "../../icontypes/Steel.png";
import Unknown from "../../icontypes/Unknown.png";
import Water from "../../icontypes/Water.png";

const Form = () => {

  const typeIcons = {
    normal: Normal,
    fighting: Fighting,
    flying: Flying,
    poison: Poison,
    ground: Ground,
    rock: Rock,
    bug: Bug,
    ghost: Ghost,
    steel: Steel,
    fire: Fire,
    water: Water,
    grass: Grass,
    electric: Electric,
    psychic: Psychic,
    ice: Ice,
    dragon: Dragon,
    dark: Dark,
    fairy: Fairy,
    unknown: Unknown,
    shadow: Shadow,
  };

  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [selectedTypes, setSelectedTypes] = useState([]);

  const [form, setForm] = useState({
    name: "",
    img: "",
    type: [],
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
  });

  const [error, setError] = useState({
    name: "",
    img: "",
    type: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
  });

  const types = useSelector((state) => state.infoType);
  const dispatch = useDispatch();

  //obtenemos los type.
  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  //lógica de selección de tipos y actualiza el estado, errores, ect.
  const handleTypeClick = (e, type) => {
    e.preventDefault();
    if (selectedTypes.length < 2) {
      if (selectedTypes.includes(type)) {
        alert("No puedes seleccionar el mismo tipo dos veces");
      } else {
        setSelectedTypes([...selectedTypes, type]);
        setForm({ ...form, type: [...form.type, type] });
      }
    } else {
      alert("Solo puedes seleccionar 2 tipos");
    }
  };

  //Al cambiarse el valor del campo actualiza el estado form y error, con la validaciones modularizadas.
  const changeHandler = (event) => {
    let property = event.target.name;
    let value = event.target.value;

    if (property === "name") value = value.toLocaleLowerCase();

    setError(validation(property, value));
    setForm({ ...form, [property]: value });
  };

  //llama cuando se envía el formulario, hacemos el post con axios para enviar los datos del form. Actualiza el estado succes o error
  const submitHandler = (event) => {
    event.preventDefault();
    if (!form.type.length) {
      form.type.push("normal");
    }
    console.log(form);
    axios
      .post("http://localhost:3001/pokemons", form)
      .then((res) => {
        setSuccessMessage(true);
        resetForm();
      })
      .catch((err) => {
        setErrorMessage(true);
        resetForm();
      });
  };

  //Lo usamos para reiniciar el formulario, actualizamos el estado.
  const resetForm = () => {
    setSelectedTypes([]);
    setForm({
      name: "",
      img: "",
      type: [],
      hp: "",
      attack: "",
      defense: "",
      speed: "",
      height: "",
      weight: "",
    });
    setError({
      name: "",
      img: "",
      type: "",
      hp: "",
      attack: "",
      defense: "",
      speed: "",
      height: "",
      weight: "",
    });
  };
  //Restablecemos los type
  const handleResetTypes = () => {
    resetForm();
  };

  

  return (
    <div className={style.animated}>
     
      {successMessage && (
        <div className={style.containerCorrecto}>
          <p className={style.pCorrecto}>El pokemon se creó correctamente.</p>
          <Link to="/home"><button className={style.buttonMessage} onClick={() => setSuccessMessage(false)}>
            Ir a Home
          </button></Link>
          
        </div>
      )}
      {errorMessage && (
        <div className={style.containerIncorrecto}>
          <p className={style.pIncorrecto}>El pokemon no se pudo crear.</p>
          <button className={style.buttonMessage} onClick={() => setErrorMessage(false)}>
            Volver a intentarlo
          </button>
        </div>
      )}

      <div
        className={`${style.types} ${style.typeContainer} ${
          successMessage || errorMessage ? `${style.filter}` : ""
        }`}
      >
        {types.map((type) => {
          return (
            <button
              onClick={(e) => handleTypeClick(e, type.name)}
              key={type.id}
              className={style.optiones}
              value={type.name}
            >
              <img
                className={style.ico}
                src={typeIcons[type.name]}
                alt={type.name}
              />
            </button>
          );
        })}
        {selectedTypes.length === 2 &&
          selectedTypes[0] === selectedTypes[1] && (
            <p>No puedes seleccionar el mismo tipo dos veces</p>
          )}
      </div>
      <button onClick={handleResetTypes} className={style.resetButton}>
        Reiniciar formulario
      </button>
      <form
        className={`${style.main} ${
          successMessage || errorMessage ? `${style.filter}` : ""
        }`}
        onSubmit={submitHandler}
      >
        <div className={style.form}>
          <div>
            <label>Name: </label>
            <input
              type="text"
              value={form.name}
              onChange={changeHandler}
              name="name"
            ></input>
            {error.name && <p>{error.name}</p>}
          </div>
          <div>
            <label>Imagen: </label>
            <input
              type="text"
              value={form.img}
              onChange={changeHandler}
              name="img"
            ></input>
            {error.img && <p>{error.img}</p>}
          </div>
          <div>
            <label>Health: </label>
            <input
              type="number"
              value={form.hp}
              onChange={changeHandler}
              name="hp"
            ></input>
            {error.hp && <p>{error.hp}</p>}
          </div>
          <div>
            <label>Attack: </label>
            <input
              type="number"
              value={form.attack}
              onChange={changeHandler}
              name="attack"
            ></input>
            {error.attack && <p>{error.attack}</p>}
          </div>
          <div>
            <label>Defense: </label>
            <input
              type="number"
              value={form.defense}
              onChange={changeHandler}
              name="defense"
            ></input>
            {error.defense && <p>{error.defense}</p>}
          </div>
          <div>
            <label>Speed: </label>
            <input
              type="number"
              value={form.speed}
              onChange={changeHandler}
              name="speed"
            ></input>
            {error.speed && <p>{error.speed}</p>}
          </div>
          <div>
            <label>Height: </label>
            <input
              type="number"
              value={form.height}
              onChange={changeHandler}
              name="height"
            ></input>
            {error.height && <p>{error.height}</p>}
          </div>
          <div>
            <label>Weight: </label>
            <input
              type="number"
              value={form.weight}
              onChange={changeHandler}
              name="weight"
            ></input>
            {error.weight && <p>{error.weight}</p>}
          </div>

          <button className={style.button} type="submit">
            Submit
          </button>
        </div>
        <div className={style.createcard}>
          <p>Name: {form.name}</p>
          <div>
            <img
              className={style.icocard}
              src={
                typeIcons[form.type[0]] ||
                Pokebola
              }
              alt={form.type[0]}
            />
            <img
              className={style.icocard}
              src={
                typeIcons[form.type[1]] ||
                Pokebola
              }
              alt={form.type[1]}
            />
          </div>
          <img
            alt="pokemon"
            className={style.img}
            src={
              form.img
                ? form.img
                : Pokebola //ternario que indica que si no existe form.img esta sera la imagen default del pokemon
            }
          ></img>
          <div className={style.info}>
            <p>Health: {form.hp}</p>
            <p>Attack: {form.attack}</p>
            <p>Defense: {form.defense}</p>
            <p>Speed: {form.speed}</p>
            <p>Height: {form.height}</p>
            <p>Weight: {form.weight}</p>
          </div>
        </div>
      </form>
      <Footer />
    </div>
  );
};
export default Form;