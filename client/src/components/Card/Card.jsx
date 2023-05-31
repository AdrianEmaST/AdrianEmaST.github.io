import { Link } from "react-router-dom";

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

import s from "./Card.module.css";

const Card = (props) => {
  const { image, name, types, img } = props;

  const getTypeIcon = (type) => {
    switch (type) {
      case "fire":
        return Fire;
      case "water":
        return Water;
      case "bug":
        return Bug;
      case "dark":
        return Dark;
      case "dragon":
        return Dragon;
      case "electric":
        return Electric;
      case "fairy":
        return Fairy;
      case "fighting":
        return Fighting;
      case "flying":
        return Flying;
      case "ghost":
        return Ghost;
      case "grass":
        return Grass;
      case "ground":
        return Ground;
      case "ice":
        return Ice;
      case "poison":
        return Poison;
      case "psychic":
        return Psychic;
      case "rock":
        return Rock;
      case "shadow":
        return Shadow;
      case "steel":
        return Steel;
      case "unknown":
        return Unknown;
      // Agrega más casos para los demás tipos de Pokémon
      default:
        return Normal; // Opcional: puedes establecer un icono de tipo predeterminado o null para los tipos desconocidos
    }
  };

  return (
    <div className={s.card}>
      <img src={props.image || props.img} alt={props.name} />
      <Link to={`/detail/${props.id}`}><p className={s.name}>{name}</p></Link>
      <div className={s.types}>
      
        {types.map((type, index) => (
          <img
            key={index}
            className={s.typeIcon}
            src={getTypeIcon(type)}
            alt={type}
            title={type}
          />
        ))}
        
      </div>
    </div>
  );
};

export default Card;
