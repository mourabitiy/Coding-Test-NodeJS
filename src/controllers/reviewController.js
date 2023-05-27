const Review = require('../models/Review');
const { Op } = require('sequelize');

exports.getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.findAll();
    res.json({ reviews });
  } catch (err) {
    console.error('Error fetching reviews: ', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.searchReviews = async (req, res) => {
  const { query } = req.query;

  try {
    const matchedReviews = await Review.findAll({
      where: {
        [Op.or]: [
          { reviewHeading: { [Op.like]: `%${query}%` } },
          { reviewText: { [Op.like]: `%${query}%` } },
        ],
      },
    });

    res.json({ reviews: matchedReviews });
  } catch (err) {
    console.error('Error searching reviews: ', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.filterReviews = async (req, res) => {
  const { minRating, maxRating, country } = req.query;

  try {
    const filteredReviews = await Review.findAll({
      where: {
        rating: {
          [Op.between]: [minRating, maxRating],
        },
        countryName: country,
      },
    });

    res.json({ reviews: filteredReviews });
  } catch (err) {
    console.error('Error filtering reviews: ', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};
