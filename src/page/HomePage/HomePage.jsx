import { useEffect, useState } from 'react'
import {fetchTrendingMovie} from '../movie-api'
import TrendMovieList from '../../components/TrendMovieList';


export default function HomePage() {
  const [items, setItems] = useState([]);

  useEffect(()=>{
    async function getData() {
      try {
        const data = await fetchTrendingMovie()
        setItems(data);
      } catch (error) {}
    }
getData()
  },[])




  return (
    <>
    <div>
        <h1>Home</h1>
      <TrendMovieList items={items}></TrendMovieList>
      </div>
    </>)

}