import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import axios from 'axios';
import CalculateCGPA from '../components/CalculateCGPA'
import ReviewForm from '../components/ReviewForm'

const CgpaCalc = () => {
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
 <CalculateCGPA/>
 <ReviewForm fetchReviews={fetchReviews} />
    <Footer/>
    </>
  )
}

export default CgpaCalc