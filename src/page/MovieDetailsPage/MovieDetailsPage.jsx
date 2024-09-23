import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { getMovieDetails } from "../movie-api";
import MovieCard from "../../components/MovieCard/MovieCard";

export default function MovieDetailsPage() {
    const {movieId} = useParams();
    
    const [movie, setMovie] = useState(null);
    const location = useLocation();
    const backLinkRef = useRef(location.state?.from ?? "/");
    
    // console.log(movieId)
    // console.log(location)
    console.log(backLinkRef.current)
    useEffect(() =>  {
        async function getData() {
                try {
                    const data = await getMovieDetails(movieId);
                    setMovie(data);
                } catch (error) {
                    
                }
        } getData()
    }, [movieId])
    return(
        <div>
            <h1>MovieDetails</h1>
            <Link to={backLinkRef.current}>GO BACK</Link>
            
            {movie && (

                <MovieCard movie={movie} movieId={movieId}></MovieCard>

            )} 


            
        </div>
    )
}