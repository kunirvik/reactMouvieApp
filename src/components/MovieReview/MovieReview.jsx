import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import {  getMovieReviews } from "../../page/movie-api";

export default function MovieReview() {
    const {movieId}=useParams();
    const [movies, setMovie] = useState([]);
    useEffect(()=>{
        async function getData() {
            try {     
           const data = await getMovieReviews(movieId);
        setMovie(data); }

         catch (error) {
                
            }
        } getData()
    },[movieId])


    return(
        <div>
         <h1> Movie Review</h1>  
         {movies && (<div><ul>{movies.map(review=>(<li key={review.id}>  <h3>{review.author}</h3>
            <p>{review.content}</p></li>))}</ul></div>)}
        </div>
    )
}