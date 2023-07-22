import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Paper } from '@mui/material';
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Link, useNavigate } from "react-router-dom";
import { Movie } from '../type';

const Hero = ({ movies }: { movies: Movie[] }) => {

  const navigate = useNavigate();

  function reviews(movieId: any) {
    navigate(`/Reviews/${movieId}`);
  }

  return (
    <div className='movie-carousel-container'>
      <Carousel>
        {
          movies?.map((movie) => {
            return (
              <Paper key={movie.imdbId}>
                <div className='movie-card-container'>
                  <div className="movie-card">
                    <div className="movie-detail">
                      <div className="movie-poster">
                        <img src={movie.poster} alt="" />
                      </div>
                      <div className="movie-title">
                        <h4>{movie.title}</h4>
                      </div>
                      <div className="movie-buttons-container">
                        <Link to={`/Trailer/${movie.trailerLink.substring(movie.trailerLink.length - 11)}`}>
                          <div className="play-button-icon-container">
                            <FontAwesomeIcon className="play-button-icon"
                              icon={faCirclePlay}
                            />
                          </div>
                        </Link>

                        <div className="movie-review-button-container">
                          <button onClick={() => reviews(movie.imdbId)} >Reviews</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Paper>
            )
          })
        }
      </Carousel>
    </div>
  )
}

export default Hero