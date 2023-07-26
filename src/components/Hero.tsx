import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Paper } from '@mui/material';
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Link, useNavigate } from "react-router-dom";
import { Movie } from '../type';

const Hero = ({ movies }: { movies: Movie[] }) => {

  const navigate = useNavigate();

  // 當點擊「Reviews」按鈕時，導航到相應的評論頁面。
  function reviews(movieId: string) {
    navigate(`/Reviews/${movieId}`);
  }

  return (
    <Carousel>
      {
        movies?.map((movie) => {
          const bgImg = `url(${movie.backdrops[0]})`;

          return (
            <Paper key={movie.imdbId}>
              <div className='h-[550px] bg-primary'>
                <div className="w-full h-full bg-no-repeat bg-cover" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1)), ${bgImg}` }}>
                  <div className="absolute flex w-full top-32 justify-evenly">
                    <div className="w-[300px] overflow-hidden">
                      <img className='w-full h-full' src={movie.poster} alt="" />
                    </div>
                    <div className="flex items-center">
                      <h2 className='text-4xl font-black tracking-wide text-white'>{movie.title}</h2>
                    </div>
                    <div className='flex items-center space-x-6 w-80'>
                      <Link to={`/Trailer/${movie.trailerLink.substring(movie.trailerLink.length - 11)}`}>
                        <FontAwesomeIcon className="text-6xl text-white" icon={faCirclePlay} />
                      </Link>
                      <button className="px-5 py-1.5 font-bold rounded-full bg-secondary" onClick={() => reviews(movie.imdbId)} >Reviews</button>
                    </div>
                  </div>
                </div>
              </div>
            </Paper>
          )
        })
      }
    </Carousel >
  )
}

export default Hero