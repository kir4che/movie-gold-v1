import { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api/axiosConfig';
import ReviewForm from './ReviewForm';

import React from 'react';
import { Movie, Review } from '../type';

interface Props {
  getMovieData: (movieId: string) => void;
  movie: Movie | undefined;
  reviews: Review[]
  setReviews: (reviews: Review[]) => void;
}

const Reviews: React.FC<Props> = ({ getMovieData, movie, reviews, setReviews }) => {
  const revText = useRef<HTMLInputElement>(null);
  const params = useParams<{ movieId: string }>();
  const movieId = params.movieId;

  useEffect(() => {
    if (movieId) getMovieData(movieId);
  }, [getMovieData, movieId]);

  const addReview = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!revText.current) return;
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
    <div className='container px-20 pt-4 mx-auto'>
      <h3 className='mb-4 text-3xl'>Reviews</h3>
      <div className="flex items-start justify-between">
        <img className='h-[74vh]' src={movie?.poster} alt="" />
        <div className='w-[640px]'>
          {movie && (
            <ReviewForm handleSubmit={addReview} revText={revText} labelText="Write a Review?" defaultValue={undefined} />
          )}
          {
            reviews.map((r: Review, index: number) => (
              <React.Fragment key={index}>
                <div>{r.body}</div>
              </React.Fragment>
            ))
          }
        </div>
      </div>
      <hr />
    </div >
  )
}

export default Reviews