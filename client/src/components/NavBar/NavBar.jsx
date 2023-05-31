import { Link } from 'react-router-dom'
import s from "./NavBar.module.css"
import SearchBar from '../SearchBar/SearchBar';
import Filter from '../Filter/Filter';


const NavBar = () =>{
    return(
        <div className={s.mainContainer}>
            <Link to='/home'>HOME</Link>
            <SearchBar />
            <Filter />
            <Link to='/create'>CREATE POKEMON</Link>
        </div>
    )
}

export default NavBar;