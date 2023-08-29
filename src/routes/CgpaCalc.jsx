import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import CalculateCGPA from '../components/CalculateCGPA'
import ReviewForm from '../components/ReviewForm'
const CgpaCalc = () => {
  return (
    <>
    <NavBar/>
 <CalculateCGPA/>
 <ReviewForm/>
    <Footer/>
    </>
  )
}

export default CgpaCalc