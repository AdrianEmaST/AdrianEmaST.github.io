import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterType, filterTypeTwo, getTypes } from "../../redux/actions";

import style from "./SearchType.module.css";

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

const SearchType = () => {
  const types = useSelector((state) => state.infoType);
  const dispatch = useDispatch();
  //locales utilizados para almacenar los tipos de Pokémon seleccionados.
  const [firstType, setFirstType] = useState(""); // agua
  const [secondType, setSecondType] = useState(""); // fuego
  
  //local utilizado para almacenar los tipos seleccionados como un arreglo.
  const [selectedTypes, setSelectedTypes] = useState([]);
  
  //Mapeamos los iconos
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

  //Ciclo de vida inicial, tukis toma los type de pokemon y actualiza el estado global infoTYpe
  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  const handleTypeSelection = (type) => {
    if (!firstType) {
      setFirstType(type);
      //Si el estado firstType está vacío, significa que es la primera vez que se está seleccionando un tipo, entonces se actualiza el estado firstType con el tipo seleccionado.
    } else if (!secondType) {
      //Si el estado secondType está vacío, significa que ya se ha seleccionado un tipo y se está seleccionando un segundo tipo, entonces se actualiza el estado secondType con el tipo seleccionado.
      setSecondType(type); // agua
    } else {
      setFirstType(secondType); // Si ambos estados firstType y secondType ya tienen un valor, significa que se está seleccionando un tercer tipo, entonces se actualiza el estado firstType con el valor actual del estado secondType y se actualiza el estado secondType con el tipo seleccionado.
      setSecondType(type); // veneno
    }
  };
  //Dispachamos y ya.
  const submitHandler = (event) => {
    event.preventDefault();
    if (!secondType) {
      dispatch(filterType(firstType));
      setSelectedTypes([firstType]);
    } else {
      dispatch(filterTypeTwo(firstType, secondType));
      setSelectedTypes([firstType, secondType]);
    }
  };

  return (
    <div>
      <form onSubmit={submitHandler} className={style.main}>
        {types.map((type) => {
          const selected = selectedTypes.includes(type.name);
          return (
            <button
              key={type.id}
              title={type.name}
              className={style.button}
              value={type.name}
              onClick={() => handleTypeSelection(type.name)}
            >
              <img
                className={`${style.icon} ${selected ? style.selected : ""}`}
                src={typeIcons[type.name]}
                alt={type.name}
              />
            </button>
          );
          //Dentro de la función handleTypeSelection, se están actualizando los estados firstType y secondType con los valores correspondientes, lo cual permite realizar la búsqueda con los dos tipos seleccionados.
        })}
      </form>
    </div>
  );
};
export default SearchType;
