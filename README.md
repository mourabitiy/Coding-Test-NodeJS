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
Modify Your database Credentials in  
    /config/sequelize.js

2. The app will start running on port 3001. Open your browser and visit http://localhost:3001 to access the API.


API Documentation
The API is documented using Swagger UI. To view the API documentation, visit http://localhost:3000/api-docs in your browser.

