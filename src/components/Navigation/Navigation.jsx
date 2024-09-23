import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "../Navigation/Navigation.module.css"
export default function Navigation() {
return(
  
    <nav className={css.nav}>
    <NavLink to="/" className={({isActive}) => {
        return clsx(css.link, isActive && css.isActive)
    }}>Home</NavLink>
    <NavLink to="/moviesearch" className={({isActive}) => {
        return clsx(css.link, isActive && css.isActive)}}>Movie</NavLink>
        
   
  </nav>
)
}