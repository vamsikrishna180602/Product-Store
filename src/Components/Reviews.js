import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

function Reviews() {
  const [reviewData, setReviewData] = useState(null);
  let Params = useParams();

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${Params.id}`)
      .then((res) => {
        setReviewData(res.data);
      });
  }, [Params.id]);

  return (
    <div className="review-container max-w-4xl mx-auto p-4">
      {reviewData != null ? (
        <div>
          <h2 className="text-2xl font-bold mb-4">Reviews: {reviewData.title}</h2>
          {reviewData.reviews && reviewData.reviews.length > 0 ? (
            reviewData.reviews.map((items, i) => (
              <div key={i} className="mb-6 p-4 border border-gray-300 rounded-lg shadow-md bg-white">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Commented By: {items.reviewerName}</h3>
                <p className="text-yellow-500">Rating: {items.rating} ⭐</p>
                <p className="text-gray-600">{items.comment}</p>
                <p className="text-gray-500 text-sm mt-2">Commented on: {items.date}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No Reviews available</p>
          )}
        </div>
      ) : (
        <p className="text-gray-500">No Reviews available</p>
      )}
    </div>
  );
}

export default Reviews;
