// This is where I am going to keep all my functions and methods for the reviews. I will first import the book model,
// then I will make the CRUD functions

const Review = require('../models/review');

// C(reate)
async function createReview(req, res) {
    try {
        const review = await Review.create(req.body);
        res.status(201).json(review);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// R(ead)
async function getReviews(req, res) {
    try {
        const reviews = await Review.find({});
        res.status(200).json(reviews);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// U(pdate)
async function updateReview(req, res) {
    try {
        // new true will return the updated review
        const review = await Review.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(review);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// D(elete)
async function deleteReview(req, res) {
    try {
        const review = await Review.findByIdAndDelete(req.params.id);
        res.status(200).json(review);    
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = { createReview, getReviews, updateReview, deleteReview };