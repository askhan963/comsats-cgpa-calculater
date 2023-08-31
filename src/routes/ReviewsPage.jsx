import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import axios from 'axios';
import Reviews from '../components/Reviews'
import ReviewForm from '../components/ReviewForm'
const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);

  const fetchReviews = async () => {
    // Logic to fetch reviews from the server
    const response = await axios.get('https://reviews-api-rose.vercel.app/reviews');
    console.log(reviews)
    setReviews(response.data);
  };
  return (
    <>
    <NavBar/>
    <Reviews/>
 <ReviewForm fetchReviews={fetchReviews} />
    <Footer/>
    </>
  )
}

export default ReviewsPage