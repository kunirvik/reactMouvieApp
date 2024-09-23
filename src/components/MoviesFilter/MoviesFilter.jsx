import { useSearchParams } from "react-router-dom"

export default function MoviesFilter() {
    const [params, setParams] = useSearchParams();
    const value = params.get("movie") ?? "";
// console.log(value)
    const changeFilter = (newFilter) => {
        params.set("movie", newFilter);
        setParams(params);
    }
    return(

<div>Filter by title
<input type="text"
value={value}
onChange={(e)=>changeFilter(e.target.value)}></input></div>
    )
}