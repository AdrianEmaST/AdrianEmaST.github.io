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

  const [searchedPokemon, setSearchedPokemon] = useState(null);
  const pokemons = useSelector((state) => state.pokemonFilter);
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

  const handleReload = () => {
    setIsLoading(true);
    setCurrentPage(1);
    dispatch(getPokemons()).then(() => setIsLoading(false));
  };

  return (
    <div className={s.paginadoContainer}>
      {isLoading ? (
        <div className={s.loading}>
          <img src={loadingGif} alt="Loading" />
          <p>Loading...</p>
        </div>
      ) : (
        <>
          {searchedPokemon ? (
            <SearchResult pokemon={searchedPokemon} />
          ) : currentPokemons.length > 0 ? (
            <CardsContainer pokemons={currentPokemons} />
          ) : (
            <div className={s.noResults}>
              <p>No se encontró el Pokémon.</p>
              <button className={s.reloadButton} onClick={handleReload}>
                Recargar
              </button>
            </div>
          )}

          <div className={s.paginado}>
            <p>
              Página {currentPage} de {totalPages}
            </p>
            <button
              className={s.paginado__button}
              onClick={handlePreviousPage}
              disabled={currentPage <= 1}
            >
              Previous
            </button>
            <button
              className={s.paginado__button}
              onClick={handleNextPage}
              disabled={currentPage >= totalPages}
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