# Social Network API

This is a RESTful API for a social network web application that allows users to share their thoughts, react to friends' thoughts, and create a friend list. The API is built using Express.js for routing and MongoDB as the NoSQL database, with Mongoose ODM for object modeling.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Walkthrough Video](#walkthrough-video)
- [API Routes](#api-routes)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run the following command to install the required dependencies:

```bash
npm install
```
## Usage

1. Ensure that you have MongoDB installed and running on your local machine.
2. Seed the server by running the following command:

```bash
npm run seed
```
3. Start the server by running the following command:

```bash
npm run start
```
4. The server will be started, and the Mongoose models will be synced to the MongoDB database.

## Walkthrough Video

[Link to walkthrough video](https://drive.google.com/file/d/14TZ2O6zuT_TNPk1gxBK_W0TsqBy9UClm/view)

## API Routes

The API provides the following routes:

### Users

- `GET /api/users`: Get all users.
- `GET /api/users/:userId`: Get a single user by ID.
- `POST /api/users`: Create a new user.
- `PUT /api/users`: Update a user by ID.
- `DELETE /api/users`: Delete a user by ID.

### Thoughts

- `GET /api/thoughts`: Get all thoughts.
- `GET /api/thoughts/:thoughtId`: Get a single thought by ID.
- `POST /api/thoughts`: Create a new thought.
- `PUT /api/thoughts`: Update a thought by ID.
- `DELETE /api/thoughts`: Delete a thought by ID.

### Reactions

- `POST /api/thoughts/:thoughtId/reactions`: Add a reaction to a thought.
- `DELETE /api/thoughts/:thoughtId/reactions`: Remove a reaction from a thought.

### Friends

- `POST /api/users/:userId/friends/:friendId`: Add a friend to a user's friend list.
- `DELETE /api/users/:userId/friends/:friendId`: Remove a friend from a user's friend list.

## Contributing

Contributions are welcome! If you would like to make any improvements to the project, feel free to submit a pull request.

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This project is under the MIT License

## Questions
For any questions, please contact me:

Github: [sadums](https://github.com/sadums)

Email: samjadams4@gmail.com