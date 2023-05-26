// routes/reviewRoutes.js
const express = require('express');
const reviewController = require('../controllers/reviewController');

const router = express.Router();

/**
 * @swagger
 * /reviews:
 *   get:
 *     description: Use to request all reviews
 *     responses:
 *       '200':
 *         description: A successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ReviewResponse'
 *       '500':
 *         description: Internal server error
 */
router.get('/', reviewController.getAllReviews);

/**
 * @swagger
 * /reviews/search:
 *   get:
 *     description: Use to search reviews
 *     responses:
 *       '200':
 *         description: A successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ReviewResponse'
 *       '500':
 *         description: Internal server error
 */
router.get('/search', reviewController.searchReviews);

/**
 * @swagger
 * /reviews/filter:
 *   get:
 *     description: Use to filter reviews
 *     responses:
 *       '200':
 *         description: A successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ReviewResponse'
 *       '500':
 *         description: Internal server error
 */
router.get('/filter', reviewController.filterReviews);

module.exports = router;
