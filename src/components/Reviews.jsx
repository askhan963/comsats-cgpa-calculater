import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Reviews() {
  const [reviews, setReviews] = useState([]);

  const fetchReviews = async () => {
    try {
      const response = await axios.get('https://reviews-api-rose.vercel.app/reviews');
      setReviews(response.data);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <div className="w-10/12 mx-auto p-4">
      <h1 className="text-4xl p-4 text-center font-semibold mb-4">Reviews</h1>
      <div className='w-full flex flex-col md:flex-row space-y-4 md:space-x-4 md:space-y-0'>
  {reviews.map((review) => (
    <div key={review._id} className="bg-white w-full md:w-1/2 p-4 mb-4 shadow-md rounded">
      <h2 className="font-bold py-4 text-2xl text-center border-black border-b">{review.name}</h2>
      <p className='text-xl p-2'>{review.review}</p>
    </div>
  ))}
</div>

    </div>
  );
}

export default Reviews;
