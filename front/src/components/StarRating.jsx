import React from 'react'
import StarRatings from 'react-star-ratings';

const style = {
  display: "flex",
  alignItems: "center",
  marginBottom: "1rem"
}
const StarRating = ({rating, reviews}) => {
  return (
    <div style={style}>
    <StarRatings
      rating={rating}
      starRatedColor="var(--blue-primary)"
      numberOfStars={5}
      name='rating'
      starDimension="clamp(1.5rem, 5vw, 2rem)"
      starSpacing="1px"
    />
    <p><small>{reviews} Reviews</small></p>
  </div>
  )
}

export default StarRating
