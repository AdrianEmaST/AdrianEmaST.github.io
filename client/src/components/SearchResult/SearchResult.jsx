import React from "react";
import Card from "../Card/Card";

const SearchResult = ({ pokemon }) => {
  const { image, name, id, types, hp, attack, defense, speed, height, weight } = pokemon;

  return (
    <div>
      <h2>Search Result</h2>
      {pokemon && (
        <Card
          key={id}
          id={id}
          name={name}
          types={types}
          image={image} // Utilizamos la propiedad "image" solo si "img" no está presente
          life={hp}
          attack={attack}
          defense={defense}
          speed={speed}
          height={height}
          weight={weight}
        />
      )}
    </div>
  );
};

export default SearchResult;