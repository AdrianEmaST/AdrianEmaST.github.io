import axios from "axios";
import { useEffect, useState } from "react";
import { validation } from "../../views/Form/validation";

import style from "../EditPokemon/EditPokemon.module.css";

import Normal from "../../icontypes/Normal.png";
import Fire from "../../icontypes/Fire.png";
import Water from "../../icontypes/Water.png";
import Fighting from "../../icontypes/Fighting.png";
import Flying from "../../icontypes/Flying.png";
import Poison from "../../icontypes/Poison.png";
import Ground from "../../icontypes/Ground.png";
import Rock from "../../icontypes/Rock.png";
import Bug from "../../icontypes/Bug.png";
import Ghost from "../../icontypes/Ghost.png";
import Steel from "../../icontypes/Steel.png";
import Grass from "../../icontypes/Grass.png";
import Electric from "../../icontypes/Electric.png";
import Psychic from "../../icontypes/Psychic.png";
import Ice from "../../icontypes/Ice.png";
import Dragon from "../../icontypes/Dragon.png";
import Dark from "../../icontypes/Dark.png";
import Fairy from "../../icontypes/Fairy.png";
import Shadow from "../../icontypes/Shadow.png";
import Unknown from "../../icontypes/Unknown.png";

import { useDispatch, useSelector } from "react-redux";
import { getPokemonId, getTypes } from "../../redux/actions";

const EditPokemon = (props) => {
  const { setEdit, id, img } = props;

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

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  const handleTypeClick = (e, type) => {
    e.preventDefault();
    if (selectedTypes.length < 2) {
      setSelectedTypes([...selectedTypes, type]);
      setForm({ ...form, type: [...form.type, type] });
    } else {
      selectedTypes[0] = selectedTypes[1];
      selectedTypes[1] = type;
      setSelectedTypes([...selectedTypes]);
      setForm({ ...form, type: [selectedTypes[0], selectedTypes[1]] });
    }
  };
  const changeHandler = (event) => {
    let property = event.target.name;
    let value = event.target.value;

    if (property === "name") value = value.toLocaleLowerCase();
    setError(validation(property, value))
    setForm({ ...form, [property]: value });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    axios
      .put(`http://localhost:3001/pokemons/${id}`, form)
      .then((res) => {
        dispatch(getPokemonId(id));
        setEdit(false);
      })
      .catch((err) => {
        alert("error");
      });
  };

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

  return (
    <div className={style.main}>
      <div className={style.containtbutton}>
        <button className={style.button} onClick={() => setEdit(false)}>X</button>
      </div>
      <div className={style.types}>
        {types.map((type) => {
          return (
            <button
              onClick={(e) => handleTypeClick(e, type.name)}
              key={type.id}
              className={style.optiones}
              value={type.name}
            >
              <img className={style.ico} src={typeIcons[type.name]} alt={type.name} />
            </button>
          );
        })}
      </div>
      <div className={style.cards}>
        <form onSubmit={submitHandler}>
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
        </form>
        <div className={style.createcard}>
          <p>Name: {form.name}</p>
          <div>
            <img className={style.icocard} src={typeIcons[form.type[0]]} alt={form.type[0]} />
            <img className={style.icocard} src={typeIcons[form.type[1]]} alt={form.type[1]} />
          </div>
          <img
            alt="pokemon"
            className={style.img}
            src={
              form.img
                ? form.img
                : img //ternario que indica que si no existe form.img esta sera la imagen default del pokemon
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
      </div>
    </div>
  );
};
export default EditPokemon;