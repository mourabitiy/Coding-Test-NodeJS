# App Reviews API

This is a Node.js API built with Express.js that allows filtering and searching of app reviews.

## Prerequisites

Before running the application, make sure you have the following installed:

- Node.js (v14 or above)
- MySQL database

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/mourabitiy/Coding-Test-NodeJS
   ```
2. Navigate to project:
    ```  
    cd 'Coding-Test-NodeJS'
    ```
3. Install the dependencies:
    ```
    npm install
    ```
    
## Database Setup
1. Create a MySQL database for the app reviews. You can use a GUI tool like phpMyAdmin or run the following command in your MySQL terminal:
    ```
    CREATE DATABASE app_reviews;
    ```
2. Configure the database 
    Update the database configuration in both src/config/sequelize.js or config/config.json files with your MySQL credentials.

3. Run the migration to create the database tables:

    ```
        npx sequelize-cli db:migrate
    ```
## Usage

1. Start the API server:
    ```
    npm start
    ```

    The app will start running on port 3001. 
    Open your browser and visit http://localhost:3001 to access the API.


2. API Endpoints:

    GET /reviews: Get all reviews.
    GET /reviews/filter?rating=3: Filter reviews by rating (replace 3 with the desired rating).
    GET /reviews/search?query=example: Search reviews by review heading or review text (replace example with the search query).
    
## API Documentation

    The API is documented using Swagger UI. To view the API documentation, visit http://localhost:3000/api-docs in your browser.

