import React, { useEffect, useState } from "react";
import style from "./Paginado.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../../redux/actions";
import CardsContainer from "../CardsContainer/CardsContainer";
import loadingGif from "../../img/loadingGif.gif";

import SearchResult from "../SearchResult/SearchResult";

const Paginado = () => {
  const dispatch = useDispatch();
  //estado local del componente que indica si se está cargando algún contenido.
  const [isLoading, setIsLoading] = useState(false);
  //Un estado local que representa la página actual en la paginación.
  const [currentPage, setCurrentPage] = useState(1);
  //Un estado local que almacena el Pokémon buscado actualmente (valor inicial nulo).
  const [searchedPokemon] = useState(null);
  //Una variable que utiliza la función useSelector para obtener el estado actualizado de los Pokémon filtrados desde el almacenamiento global.
  const pokemons = useSelector((state) => state.pokemonFilter);
  //El número de elementos que se muestran por página (valor fijo en 12).
  const itemsPerPage = 12;
  //El número total de páginas calculado dividiendo la longitud de la lista de Pokémon entre el número de elementos por página.
  const totalPages = Math.ceil(pokemons.length / itemsPerPage);

  //se ejecuta cuando se hace clic en el botón "Previous" para ir a la página anterior, actualizando el estado currentPage si no está en la primera página.
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };
  //se ejecuta cuando se hace clic en el botón "Next" para ir a la página siguiente, actualizando el estado currentPage si no está en la última página.
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };
  //los índices de inicio y fin de los Pokémon que se mostrarán en la página actual.
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  //sublista de Pokémon obtenida de pokemons utilizando los índices de inicio y fin.
  const currentPokemons = pokemons.slice(startIndex, endIndex);

  //cargar los Pokémon iniciales.
  useEffect(() => {
    setIsLoading(true);
    dispatch(getPokemons()).then(() => setIsLoading(false));
  }, [dispatch]);
  //se establece isLoading en true, se despacha la acción getPokemons para obtener los Pokémon y luego se actualiza isLoading en false cuando la operación está completa.
  //-----

  //Establece isLoading en true, restablece la página actual a 1, despacha la acción getPokemons y luego cambia de nuevo el estado de loading
  const handleReload = () => {
    setIsLoading(true);
    setCurrentPage(1);
    dispatch(getPokemons()).then(() => setIsLoading(false));
  };

  return (
    <div className={style.paginadoContainer}>
      {isLoading ? (
        <div className={style.loading}>
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
            <div className={style.noResults}>
              <p>No se encontró el Pokémon.</p>
              <button className={style.reloadButton} onClick={handleReload}>
                Recargar
              </button>
            </div>
          )}

          <div className={style.paginado}>
            <p>
              Página {currentPage} de {totalPages}
            </p>
            <button
              className={style.paginado__button}
              onClick={handlePreviousPage}
              disabled={currentPage <= 1}
            >
              Previous
            </button>
            <button
              className={style.paginado__button}
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