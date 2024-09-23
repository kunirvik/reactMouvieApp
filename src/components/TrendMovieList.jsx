import { Link } from "react-router-dom";


export default function TrendMovieList({items}) {
 
    return(
        <div>
            <ul>{items.map(item=>(<li key={item.id}>
             <Link to={`/moviesearch/${item.id}`} >{item.title}</Link>
            </li>))}</ul>
        </div>
    )
}