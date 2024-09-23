import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import clsx from "clsx";
import css from '../MovieCard/MovieCard.module.css'

export default function MovieCard({movie, movieId}) {
    return( <div><div className={css.wrapperMain}>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <div className={css.wrapper}>  <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
</div>
        
</div>

     <Suspense><Outlet></Outlet></Suspense>
     <ul><li>
        <NavLink to={"cast"} className={({isActive}) => {
        return clsx(css.link, isActive && css.isActive)
    }}>Cast</NavLink></li>
        <li>
        <NavLink to={"reviews"} className={({isActive}) => {
        return clsx(css.link, isActive && css.isActive)
    }}>Reviews</NavLink></li>
</ul></div>
    )

}
