// models/Review.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const Review = sequelize.define('Review', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  appID: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  appStoreName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  reviewDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  version: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  countryName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  reviewHeading: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  reviewText: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  reviewUserName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'reviews',
  timestamps: false,
});

module.exports = Review;
