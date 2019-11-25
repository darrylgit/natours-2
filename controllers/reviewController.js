const Review = require('./../models/reviewModel');
const catchAsync = require('./../utilities/catchAysnc');
const factory = require('./handlerFactory');
//const APIFeatures = require('./../utilities/apiFeatures');
//const AppError = require('./../utilities/appError');

exports.getAllReviews = catchAsync(async (req, res, next) => {
  let filter = {};
  if (req.params.tourId) filter = { tour: req.params.tourId };

  const reviews = await Review.find(filter);

  res.status(200).json({
    status: 'success',
    results: reviews.length,
    data: { reviews }
  });
});

exports.setTourUserIds = (req, res, next) => {
  // Alow nested routes
  if (!req.body.tour) req.body.tour = req.params.tourId;
  if (!req.body.user) req.body.user = req.user.id;
  next();
};

exports.createReview = factory.createOne(Review);
exports.updateReview = factory.updateOne(Review);
exports.deleteReview = factory.deleteOne(Review);
