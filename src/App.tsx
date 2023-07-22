import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import api from './api/axiosConfig.tsx';
import Trailer from './components/Traller.tsx';
import Home from './pages/Home.tsx';
import NotFound from './pages/NotFound.tsx';
import { Movie } from './type';

const App: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const getMovies = async () => {
    try {
      const response = await api.get("/api/v1/movies");
      setMovies(response.data);
      // console.log(response.data);
    }
    catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getMovies();
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route path="/" element={<Home movies={movies} />} ></Route>
          <Route path="/Trailer/:ytTrailerId" element={<Trailer />}></Route>
          {/* <Route path="/Reviews/:movieId" element={<Reviews getMovieData={getMovieData} movie={movie} reviews={reviews} setReviews={setReviews} />}></Route> */}
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App