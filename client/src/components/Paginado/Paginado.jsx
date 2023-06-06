import React, { useEffect, useState } from "react";
import s from "./Paginado.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../../redux/actions";
import CardsContainer from "../CardsContainer/CardsContainer";
import loadingGif from "../../img/loadingGif.gif";

import SearchResult from "../SearchResult/SearchResult";

const Paginado = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const [searchedPokemon, setSearchedPokemon] = useState(null); // Nuevo estado para almacenar el resultado de la búsqueda

  const pokemons = useSelector((state) => state.pokemonFilter); //
  const itemsPerPage = 12;
  const totalPages = Math.ceil(pokemons.length / itemsPerPage);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPokemons = pokemons.slice(startIndex, endIndex);

  useEffect(() => {
    setIsLoading(true);

    dispatch(getPokemons()).then(() => setIsLoading(false));
  }, [dispatch]);

  return (
    <div className={s.paginadoContainer}>
      {isLoading ? (
        <div className={s.loading}>
          <img src={loadingGif} alt="Loading" />
          <p>Loading...</p>
        </div>
      ) : (
        <>
          {searchedPokemon ? ( // Mostrar el componente SearchResult si se realiza una búsqueda exitosa
            <SearchResult pokemon={searchedPokemon} />
          ) : (
            <CardsContainer pokemons={currentPokemons} />
          )}

          <div className={s.paginado}>
            <p>
              Página {currentPage} de {totalPages}
            </p>
            <button
              className={s.paginado__button}
              onClick={handlePreviousPage}
              disabled={currentPage <= 1} // Deshabilitar el botón si currentPage es igual o menor que 1
            >
              Previous
            </button>
            <button
              className={s.paginado__button}
              onClick={handleNextPage}
              disabled={currentPage >= totalPages} // Deshabilitar el botón si currentPage es igual o mayor que totalPages
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Paginado;