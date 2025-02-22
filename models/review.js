// This is where I am making the Schema for the reviews

const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    body: {type: String, required: true}, 
    rating: {type :Number, required: true},
    name: {type: String, required: true},
}, {timestamps: true});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;