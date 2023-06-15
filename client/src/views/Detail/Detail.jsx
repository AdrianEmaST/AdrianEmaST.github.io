import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonId } from "../../redux/actions";
import { useParams } from "react-router-dom";

import Loader from "../Loader/Loader";
import Footer from "../../components/Footer/Footer";

import style from "../Detail/Detail.module.css";

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

const Detail = () => {
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

  const dispatch = useDispatch();
  //De nuevo, el loading del componente.
  const [loading, setLoading] = useState(true);
  //Estado global de los pokemon
  const pokemon = useSelector((state) => state.pokemonDetail);
  //de la URL
  const { id } = useParams();

  //Dispat el loading del componente seteandolo correctamente.
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      dispatch(getPokemonId(id));
      setLoading(false);
    };
    getData();
  }, [dispatch, id]);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className={style.mainimage}>
          <div>
            <img
              className={style.image}
              src={pokemon.img}
              alt={pokemon.name}
            ></img>
            <div className={style.nameandtype}>
              <p className={style.name}>{pokemon.name}</p>
              {pokemon.type?.map((t) => (
                <img
                  className={style.icon}
                  src={typeIcons[t]}
                  alt={t}
                  key={t}
                />
              ))}
            </div>
          </div>
          <div>
            <div className={style.conteinattackhp}>
              <p> Hp: {pokemon.hp}</p>
              <p> Attack: {pokemon.attack}</p>
            </div>
            <div className={style.info}>
              <p> Weight: {pokemon.weight}</p>
              <p> Defense: {pokemon.defense}</p>
              <p> Speed: {pokemon.speed}</p>
              <p> Height: {pokemon.height}</p>
            </div>
          </div>
        </div>
      )}
      <div className={style.footer}>
        <Footer />
      </div>
    </div>
  );
};
export default Detail;
