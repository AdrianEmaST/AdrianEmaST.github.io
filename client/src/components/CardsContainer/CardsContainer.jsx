import Card from "../Card/Card";
import style from "./CardsContainer.module.css";

const CardsContainer = ({ pokemons }) => {
  return (
    <div className={style.cardsContainer}>
      {pokemons.map((p) => (
        <Card
          key={p.id}
          id={p.id}
          name={p.name}
          types={p.types || p.type}
          image={p.img || p.image}
          life={p.life}
          attack={p.attack}
          defense={p.defense}
          speed={p.speed}
          height={p.height}
          weight={p.weight}
        />
      ))}
    </div>
  );
};

export default CardsContainer;
