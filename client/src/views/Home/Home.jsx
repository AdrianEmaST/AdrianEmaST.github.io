import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemons } from "../../redux/actions";

import style from "../Home/Home.module.css";

import Search from "../../components/Search/Search";
import Loader from "../Loader/Loader";
import SearchType from "../../components/SearchType/SearchType";
import Paginado from "../../components/Paginado/Paginado"
import SearchBar from "../../components/SearchBar/SearchBar";

const Home = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  // useEffect( async () => {
  //   setLoading(true);
  //   await dispatch(getPokemons());
  //   setLoading(false)
  // }, [dispatch]);
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      await dispatch(getPokemons());
      setLoading(false);
    };
    getData();
  }, [dispatch]);
    return (
        <div className={style.main}>
          {loading ? (
            <Loader />,
            <p>Loading</p>
          ) : (
            <div className={style.animation}>
              

              <Paginado />
            </div>
          )}
        </div>
      );
    };

export default Home;