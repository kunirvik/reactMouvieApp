import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";


export default function MovieCard({movie, movieId}) {
    return( <div><h1>{movie.title}</h1>
        <p>{movie.overview}</p>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
     <Suspense><Outlet></Outlet></Suspense>
     <ul><li>
        <NavLink to={"cast"}>Cast</NavLink></li>
        <li>
        <NavLink to={"reviews"}>Reviews</NavLink></li>
</ul></div>
    )

}
