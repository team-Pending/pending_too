const { Review, User } = require('../models');

const reviewController = {
  // get all reviews
  getReviews(req, res) {
    Review.find()
      .sort({ createdAt: -1 })
      .then((dbReviewData) => {
        res.json(dbReviewData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // get single reivew by id
  getSingleReview(req, res) {
    Review.findOne({ _id: req.params.reviewId })
      .then((dbReviewData) => {
        if (!dbReviewData) {
          return res.status(404).json({ message: 'No review with this id!' });
        }
        res.json(dbReviewData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // create a review
  createReview(req, res) {
    Review.create(req.body)
      .then((dbReviewData) => {
        return User.findOneAndUpdate(
          { _id: req.body.userId },
          { $push: { reviews: dbReviewData._id } },
          { new: true }
        );
      })
      .then((dbUserData) => {
        if (!dbUserData) {
          return res.status(404).json({ message: 'Review created but no user with this id!' });
        }

        res.json({ message: 'Review successfully created!' });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // update review
  updateReview(req, res) {
    Review.findOneAndUpdate({ _id: req.params.reviewId }, { $set: req.body }, { runValidators: true, new: true })
      .then((dbReviewData) => {
        if (!dbReviewData) {
          return res.status(404).json({ message: 'No review with this id!' });
        }
        res.json(dbReviewData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // delete review
  deleteReview(req, res) {
    Review.findOneAndRemove({ _id: req.params.reviewId })
      .then((dbReviewData) => {
        if (!dbReviewData) {
          return res.status(404).json({ message: 'No review with this id!' });
        }

        // remove review id from user's `review` field
        return User.findOneAndUpdate(
          { reviews: req.params.reviewId },
          { $pull: { review: req.params.reviewId } },
          { new: true }
        );
      })
      .then((dbUserData) => {
        if (!dbUserData) {
          return res.status(404).json({ message: 'Review created but no user with this id!' });
        }
        res.json({ message: 'Review successfully deleted!' });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
};

module.exports = reviewController;