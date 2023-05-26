const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const express = require('express');

const app = express();

const ReviewSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'integer',
    },
    appID: {
      type: 'string',
    },
    appStoreName: {
      type: 'string',
    },
    reviewDate: {
      type: 'string',
      format: 'date-time',
    },
    rating: {
      type: 'integer',
    },
    version: {
      type: 'string',
    },
    countryName: {
      type: 'string',
    },
    reviewHeading: {
      type: 'string',
    },
    reviewText: {
      type: 'string',
    },
    reviewUserName: {
      type: 'string',
    },
  },
  required: [
    'id',
    'appID',
    'appStoreName',
    'reviewDate',
    'rating',
    'version',
    'countryName',
    'reviewHeading',
    'reviewText',
    'reviewUserName',
  ],
};

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'App Reviews Documentation',
      version: '1.0.0',
      description: 'This is a simple CRUD API application made with Express and documented with Swagger',
    },
    servers: [
      {
        url: 'http://localhost:3001',
      }
    ],
    components: {
      schemas: {
         ReviewResponse : {
          type: 'object',
          properties: {
            reviews: {
              type: 'array',
              items: ReviewSchema,
            },
          },
        },
        Review: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
            },
            title: {
              type: 'string',
            },
            content: {
              type: 'string',
            },
          },
          required: ['id', 'title', 'content'],
        },
      },
    },
  },
  apis: ['./src/routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(3000, () => {
  console.log('API documentation is available at http://localhost:3000/api-docs');
});
