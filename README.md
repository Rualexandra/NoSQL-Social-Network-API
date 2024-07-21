# No SQL Social Network API
MongoDB is a popular choice for many social networks due to its speed with large amounts of data and flexibility with unstructured data. This project involves building an API for a social network web application where users can share thoughts, react to friends' thoughts, and create a friend list. The application uses Express.js for routing, a MongoDB database, and the Mongoose ODM.

# User Story
As a social media startup, I want an API for my social network that uses a NoSQL database so that my website can handle large amounts of unstructured data.

# Acceptance Criteria
Given a social network API, when I enter the command to invoke the application, my server is started and the Mongoose models are synced to the MongoDB database. When I open API GET routes in Insomnia for users and thoughts, the data for each of these routes is displayed in a formatted JSON. When I test API POST, PUT, and DELETE routes in Insomnia, I am able to successfully create, update, and delete users and thoughts in my database. Additionally, when I test API POST and DELETE routes in Insomnia, I am able to successfully create and delete reactions to thoughts and add and remove friends to a user's friend list.

# HOW IT WORKS
## Getting Started
1. Clone the repository:

    git clone https://github.com/Rualexandra/NoSQL-Social-Network-API.git
    cd social-network-api

2. Install dependencies:
    npm install

3. Set up your MongoDB connection:

    Ensure you have MongoDB running locally or use a MongoDB Atlas cluster.
    Update the connection.js file with your MongoDB URI:

        const mongoose = require('mongoose');

        mongoose.connect('your_mongo_db_connection_string', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        });

        module.exports = mongoose.connection;

4. Start the server:

    npm start

5. Testing the API
    Use Insomnia or any other API client to test the endpoints.
    GET Routes: Test the routes to retrieve all users and thoughts, single user, and single thought.
    POST, PUT, DELETE Routes: Test creating, updating, and deleting users and thoughts, adding/removing friends, and reactions.

# Example Requests
    Create User:

    {
    "username": "john_doe",
    "email": "john.doe@example.com"
    }

## Create Thought:

    {
    "thoughtText": "This is a cool thought!",
    "username": "john_doe",
    "userId": "60d5f78f42c4e540d2b0b9b6"
    }
## Add Reaction:

    {
    "reactionBody": "This is a reaction!",
    "username": "john_doe"
    }

# Walkthrough Video
    A walkthrough video demonstrating the functionality of the social media API can be found here.