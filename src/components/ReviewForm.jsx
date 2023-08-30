import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
function ReviewForm({ fetchReviews }) {
  const [name, setName] = useState('');
  const [review, setReview] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !review) {
      alert('Please fill in both fields');
      return;
    }

    try {
      console.log("Submiting")
        await axios.post('https://reviews-api-rose.vercel.app/reviews', { name, review });
      fetchReviews(); // Fetch reviews to update the list
      setName('');
      setReview('');
       // If the submission is successful
     
      toast.success('Form submitted successfully! Thank You For the Review!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      console.log("Submited")


    } catch (error) {
      console.error('Error posting review:', error);
        // If the submission is successful
        toast.error('Sorry We have some Problem Please Try Again!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
    }
  };

  return (
    <div className="w-10/12 mx-auto p-4">
      <h1 className="text-4xl p-4 text-center font-semibold mb-4">Post a review</h1>
    <form onSubmit={handleSubmit} className="w-1/2 mx-auto my-4 p-4 text-center bg-white shadow-md rounded">
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full px-3 py-2 border rounded mb-2"
      />
      <textarea
        placeholder="Write a review..."
        value={review}
        onChange={(e) => setReview(e.target.value)}
        className="w-full px-3 py-2 border rounded mb-2"
      />
      <button
        type="submit"
        className="bg-green-500 w-1/2 text-center text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Post Review
      </button>
    </form>
    </div>
  );
}

export default ReviewForm;
