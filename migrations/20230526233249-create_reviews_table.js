'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('reviews', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      appID: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      appStoreName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      reviewDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      rating: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      version: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      countryName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      reviewHeading: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      reviewText: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      reviewUserName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('reviews');
  },
};
