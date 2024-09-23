import { useLocation, Link} from "react-router-dom";
import MovieCard from "../MovieCard/MovieCard";



export default function MoviesList({items}) {
    const location = useLocation(); 
    return(
        <div>
        <ul>{items.map(item=>(<li key={item.id}>   <Link to={`/moviesearch/${item.id}`} state={{ from: location }}>
           {item.title}
          </Link></li>))}</ul>
    </div>
    )
}