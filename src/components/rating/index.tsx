import { useEffect, useState } from "react";
import { Star } from "./rating";

export type RatingProps = {
  rating: number;
};

const Rating = ({ rating }: RatingProps) => {
  const [internalRating, setRating] = useState(0);

  useEffect(() => {
    setRating(rating);
  }, [rating]);

  return (
    <>
      {Array.from({ length: 5 }).map((i, index) => (
        <Star
          key={index}
          onClick={() => setRating(index)}
          style={{ color: index <= internalRating ? "#b49383" : "#636363" }}
        />
      ))}
    </>
  );
};

export default Rating;
