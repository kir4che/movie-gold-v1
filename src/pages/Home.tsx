import React from 'react';
import Hero from '../components/Hero.tsx';
import { Movie } from '../type';

const Home = ({ movies }: { movies: Movie[] }) => {
  return (
    <Hero movies={movies} />
  )
}

export default Home