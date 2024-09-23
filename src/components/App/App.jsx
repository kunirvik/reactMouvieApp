import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
// import MovieDetailsPage from '../../page/MovieDetailsPage/MovieDetailsPage';
// import MovieSearchPage from '../../page/MovieSearchPage/MovieSearchPage';


const HomePage = lazy(() => import("../../page/HomePage/HomePage").then((module)=>{return module}));

const MovieSearchPage = lazy(() => import("../../page/MovieSearchPage/MovieSearchPage").then((module)=>{return module}));
const MovieDetailsPage = lazy(() => import("../../page/MovieDetailsPage/MovieDetailsPage").then((module)=>{return module}));
const MovieCast = lazy(()=>import("../../components/MovieCast/MovieCast").then((module)=>{return module}));
const MovieReview = lazy(()=>import("../../components/MovieReview/MovieReview").then((module)=>{return module}));

function App() {
 



  return (
    <>
    <Navigation></Navigation>
    <Suspense fallback={<div>loading page</div>}>
<Routes>
    <Route path="/" element={<HomePage></HomePage>}></Route>
    <Route path="/moviesearch" element={<MovieSearchPage></MovieSearchPage>}></Route>
    <Route path="/moviesearch/:movieId" element={<MovieDetailsPage></MovieDetailsPage>}>
  
    <Route path="cast" element={<MovieCast></MovieCast>}></Route>
    <Route path="reviews" element={<MovieReview></MovieReview>}></Route>
    
    </Route>

    </Routes>
    </Suspense></>
  )
}

export default App
