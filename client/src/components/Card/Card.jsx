import { Link } from "react-router-dom";
import style from "./Card.module.css";

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

const Card = (props) => {

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
      default:
        return Normal;
    }
  };

  return (
    <div className={style.card}>
      <img src={props.image} alt={props.name} />
      <Link to={`/detail/${props.id}`}>
        <p className={style.name}>{props.name}</p>
      </Link>
      <div className={style.types}>
        {props.types.map((type, index) => (
          <img
            key={index}
            className={style.typeIcon}
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
