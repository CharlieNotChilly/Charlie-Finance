import { Star } from 'lucide-react'
import React from 'react'

type RatingProps = {
    ratings: number
}

const Rating = ({ratings}: RatingProps) => {
    return [1, 2, 3, 4, 5].map((index) => (
      <Star key={index} color={index <= ratings ? "#FFC107" : "#E4E5E9"}/>
  ))
}

export default Rating