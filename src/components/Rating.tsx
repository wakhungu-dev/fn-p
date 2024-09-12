// components/Rating.tsx
import React from 'react';
import { Review } from '@/types/core';

interface RatingProps {
  reviews: Review[];
}

const Rating = ({ reviews }: RatingProps) => {
  const calculateAverageRating = (): number => {
    if (reviews.length === 0) return 0;
    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    return totalRating / reviews.length;
  };

  const averageRating = calculateAverageRating();

  return (
    <div className="mt-2">
      {reviews.length > 0 ? (
        <p className="text-gray-600">
          Average Rating: {averageRating.toFixed(1)}
        </p>
      ) : (
        <p className="text-gray-600">No ratings yet</p>
      )}
    </div>
  );
};

export default Rating;
