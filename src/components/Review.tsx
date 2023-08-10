import React, { useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import ReviewForm from './ReviewForm'

interface Review {
  body: string
}

interface Movie {
  poster: string
}

interface ReviewsProps {
  getMovieData: (movieId: string) => void
  movie: Movie | null
  reviews: Review[]
  setReviews: React.Dispatch<React.SetStateAction<Review[]>>
}

const Reviews: React.FC<ReviewsProps> = ({ getMovieData, movie, reviews, setReviews }) => {
  const revText = useRef<HTMLTextAreaElement>(null)
  let params = useParams<{ movieId: string }>()
  const movieId = params.movieId

  useEffect(() => {
    if (movieId) getMovieData(movieId)
  }, [])

  const addReview = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()

    const rev = revText.current

    if (rev && rev.value) {
      try {
        // const response = await api.post("/api/v1/reviews", { reviewBody: rev.value, imdbId: movieId })
        const updatedReviews = [...reviews, { body: rev.value }]
        rev.value = ""
        setReviews(updatedReviews)
      }
      catch (err) {
        console.error(err)
      }
    }
  }

  return (
    <div className='container px-4 pt-4 mx-auto'>
      <h3 className='mb-4 text-3xl'>Reviews</h3>
      <div className="grid grid-cols-2 gap-0 sm:gap-8">
        <img className='object-contain max-h-[36vh] sm:max-h-[74vh]' src={movie?.poster} alt="" />
        <div className='w-full'>
          {movie && (
            <ReviewForm handleSubmit={addReview} revText={revText} labelText="Write a Review?" />
          )}
          {
            reviews.map((r, index) => (
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