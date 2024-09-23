import { useEffect, useMemo, useState } from "react"
import { useSearchParams } from "react-router-dom";
import { searchMovies } from "../movie-api";
import MoviesFilter from "../../components/MoviesFilter/MoviesFilter";
import MoviesList from "../../components/MoviesList/MoviesList";

export default function MovieSearchPage() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const [params] = useSearchParams();
    const movieFilter = params.get("movie") ?? "";

    useEffect(()=>{
        async function getData () {
            try {
                
           
            setLoading(true);
            const data = await searchMovies(movieFilter);
            setMovies(data); 
        }
 catch (error) {
    setError(true);
            }
            finally{
                setLoading(false)
            }
        }
        getData();
    },[movieFilter]);

    const filterParams = useMemo(()=>{ return movies.filter((movie)=>
         movie.title.toLowerCase().includes(movieFilter.toLowerCase()))}, [movieFilter,movies])
        return( <div> 
            <h1>Movie Search Page</h1> 

            <MoviesFilter></MoviesFilter>

            {loading && <b>loading</b>}
            {error && <b>oops</b>}
            <MoviesList items={filterParams}></MoviesList>
            
         </div>

            
        )   
}