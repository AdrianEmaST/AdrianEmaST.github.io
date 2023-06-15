import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemons } from "../../redux/actions";

import style from "../Home/Home.module.css";

import Loader from "../Loader/Loader";
import SearchType from "../../components/SearchType/SearchType";
import Paginado from "../../components/Paginado/Paginado";
import SearchBar from "../../components/SearchBar/SearchBar";
import Filter from "../../components/Filter/Filter";
import Footer from "../../components/Footer/Footer";

const Home = () => {

  const dispatch = useDispatch();
  //De nuevo seteamos el loading.
  const [loading, setLoading] = useState(true);
  //Estado para recargar el componente
  const [reload, setReload] = useState(false);

  //Setemos el loading, definimos getData así se establece en true.
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      dispatch(getPokemons());
      setLoading(false);
    };
    getData();
  }, [dispatch, reload]);

  //No depende
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      dispatch(getPokemons());
      setLoading(false);
    };
    getData();
  }, [dispatch]);

  
  return (
    <div className={style.container}>
      <div className={style.main}>
        {loading ? (
          ((<Loader />), (<p>Loading</p>))
        ) : (
          <div className={style.animation}>
            <SearchType />
            <div className={style.controls}>
              <SearchBar />

              <Filter />
              <button
                className={style.button}
                onClick={() => setReload(!reload)}
              >
                Recargar
              </button>
            </div>
            <div className={style.bottomSection}>
              <Paginado />
              <Footer />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
