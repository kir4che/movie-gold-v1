import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import api from './api/axiosConfig.tsx';
import Header from './components/Header.tsx';
import Reviews from './components/Review.tsx';
import Trailer from './components/Traller.tsx';
import Home from './pages/Home.tsx';
import NotFound from './pages/NotFound.tsx';
import './style.css';
import { Movie, Review } from './type';

const App: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [movie, setMovie] = useState<Movie>();
  const [reviews, setReviews] = useState<Review[]>([]);

  const getMovies = async () => {
    try {
      const response = await api.get("/api/v1/movies");
      setMovies(response.data);
    }
    catch (err) {
      console.log(err);
    }
  }

  const getMovieData = async (movieId: string) => {
    try {
      const response = await api.get(`/api/v1/movies/${movieId}`);
      const singleMovie = response.data;
      setMovie(singleMovie);
      setReviews(singleMovie.reviews);
    }
    catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getMovies();
  }, [])

  return (
    <div className='min-h-screen'>
      <Header />
      <Routes>
        <Route path="/" element={<Home movies={movies} />} />
        <Route path="/Trailer/:ytTrailerId" element={<Trailer />} />
        <Route path="/Reviews/:movieId" element={<Reviews getMovieData={getMovieData} movie={movie} reviews={reviews} setReviews={setReviews} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App