const router = require('express').Router();
const {
  getReviews,
  getSingleReview,
  createReview,
  updateReview,
  deleteReview,
} = require('../../controllers/reviewController');

// /api/reviews
router.route('/').get(getReviews).post(createReview);

// /api/reviews/:reviewId
router.route('/:reviewId').get(getSingleReview).put(updateReview).delete(deleteReview);

module.exports = router;
