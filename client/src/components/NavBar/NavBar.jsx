import { Link } from 'react-router-dom'
import s from "./NavBar.module.css"
import Nombre from "../../img/Nombre.png"


const NavBar = () =>{
    return(
        <div className={s.mainContainer}>
            <Link to='/home'>HOME</Link>
            <Link to='/aboutme'><img src={Nombre} alt="" className={s.nombre}/></Link>
            <Link to='/create'>CREATE POKEMON</Link>
        </div>
    )
}

export default NavBar;