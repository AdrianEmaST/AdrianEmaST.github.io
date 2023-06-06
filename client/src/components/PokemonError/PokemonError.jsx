import style from "./PokemonError.module.css";


const PokemonError = (props) => {
  const { setPokemonError } = props;

  return (
    <div className={`${style.main} ${style.fadein}`}>
      <p>Revisa los datos, tas moqueando</p>
      <div className={style.containtbutton}>
        <button className={style.button} onClick={() => setPokemonError(false)}>X</button>
      </div>
      <div className={style.containimg}>
        <p>¿Que?</p>
      </div>
    </div>
  );
};
export default PokemonError;