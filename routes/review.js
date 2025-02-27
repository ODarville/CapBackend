// This is where I will be importing all the functions from my controller file
// At first I didnt understand doing this but after a talk with the GOAT(Bryan) I understand how helpful it is especially while debugging
// The more I have been using this the more I understand the importance of it and like it so flames for the GOAT

const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/review');

// C
router.post('/', reviewController.createReview);
// R
router.get('/', reviewController.getReviews);
// U
router.patch('/:id', reviewController.updateReview);
// D
router.delete('/:id', reviewController.deleteReview);

module.exports = router;