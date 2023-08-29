const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require("dotenv");

dotenv.config()
const app = express();
app.use(cors());
app.use(express.json());
const Url = process.env.MONGO_URL;
mongoose.connect(Url, {
  useNewUrlParser: true,
  useUnifiedTopology: true 
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });


const reviewSchema = new mongoose.Schema({
  name: String,
  review: String
});

const Review = mongoose.model('Review', reviewSchema);

app.post('/reviews', async (req, res) => {
  const { name, review } = req.body;

  try {
    const newReview = new Review({ name, review });
    await newReview.save();
    res.status(201).json(newReview);
  } catch (error) {
    res.status(500).json({ message: 'Error saving review.' });
  }
});

app.get('/reviews', async (req, res) => {
  try {
    const reviews = await Review.find();
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching reviews.' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
