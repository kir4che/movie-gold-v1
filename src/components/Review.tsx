import { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api/axiosConfig';
import ReviewForm from './ReviewForm';

import React from 'react';

interface Review {
  body: string;
}

interface Movie {
  poster: string;
  // Add other properties of the movie object if available
}

interface Props {
  getMovieData: (movieId: string) => void;
  movie: Movie | null;
  reviews: Review[];
  setReviews: (reviews: Review[]) => void;
}

const Reviews: React.FC<Props> = ({ getMovieData, movie, reviews, setReviews }) => {
  const revText = useRef<HTMLInputElement>(null); // Use HTMLInputElement for ref type
  const params = useParams<{ movieId: string }>();
  const movieId = params.movieId;

  useEffect(() => {
    if (movieId) {
      getMovieData(movieId);
    }
  }, [getMovieData, movieId]); // Don't forget to add movieId to the dependency array

  const addReview = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!revText.current) return; // Make sure the ref is valid

    const rev = revText.current.value;

    try {
      if (movieId) {
        const response = await api.post("/api/v1/reviews", { reviewBody: rev, imdbId: movieId });

        const updatedReviews = [...reviews, { body: rev }];

        revText.current.value = "";

        setReviews(updatedReviews);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className='container'>
      <div>
        <div>
          <h3>Reviews</h3>
        </div>
      </div>
      <div className="mt-2">
        <div>
          <img src={movie?.poster} alt="" />
        </div>
        <div>
          {movie && ( // Add a condition to render only when movie is available
            <>
              <div>
                <div>
                  <ReviewForm handleSubmit={addReview} revText={revText} labelText="Write a Review?" defaultValue={undefined} />
                </div>
              </div>
              <div>
                <div>
                  <hr />
                </div>
              </div>
            </>
          )}
          {
            reviews.map((r: Review, index: number) => ( // Use map directly and provide a unique key to avoid warning
              <React.Fragment key={index}>
                <div>
                  <div>{r.body}</div>
                </div>
                <div>
                  <div>
                    <hr />
                  </div>
                </div>
              </React.Fragment>
            ))
          }
        </div>
      </div>
      <div>
        <div>
          <hr />
        </div>
      </div>
    </div>
  )
}

export default Reviews