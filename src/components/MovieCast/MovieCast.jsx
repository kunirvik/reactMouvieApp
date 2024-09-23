import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { getMovieCast } from "../../page/movie-api";

export default function MovieCast() {
    const {movieId}=useParams();
    const [movies, setMovie] = useState([]);
    useEffect(()=>{
        async function getData() {
            try {     
           const data = await getMovieCast(movieId);
        setMovie(data); }

         catch (error) {
                
            }
        } getData()
    },[movieId])


    return(
        <div>
         <h1> Movie Cast</h1>  
         {movies && (<div><ul>{movies.map(actor=>(<li key={actor.cast_id}>    {/* Проверяем, есть ли у актера фото (profile_path) */}
              {actor.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                  alt={actor.name}
                  style={{ width: "100px", height: "auto" }}  // Задаем размер изображения
                />
              ) : (
                <p>No Image Available</p>  // Если фото нет
              )} {actor.name} as {actor.character}</li>))}</ul></div>)}
        </div>
    )
}