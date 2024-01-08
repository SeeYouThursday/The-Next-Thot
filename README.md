# The-Next-Thot

## Description

The Next Thot is a social media API that allows users to share their thots, and reaction to other users thoughts. Users can connect with other users by adding them to their friends list. If you grow tired of your thot or friend, you can remove it from the database utilizing Mongoose.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Questions](#questions)

## Installation

To install the necessary dependencies, run the following command:

    `npm i`

## Usage

### Walkthrough Video

![Walkthrough](https://clipchamp.com/watch/Ox2iDEFSk3R)

To use the application, run the following command:

    `npm run start` or if you have nodemon installed, `npm run watch`

### API Routes

**`/api/users`**

- `GET` all users

- `GET` a single user by its `_id` and populated thought and friend data

- `POST` a new user:

// example JSON data
{
"thoughtText": "Here's a cool thought...",
"username": "lernantino",
"userId": "5edff358a0fcb779aa7b118b"
}

- `PUT` to update a user by its `_id`

- `DELETE` to remove user and their thoughts by the user's `_id`

---

**`/api/users/:userId/friends/:friendId`**

- `POST` to add a new friend to a user's friend list

- `DELETE` to remove a friend from a user's friend list

---

**`/api/thoughts`**

- `GET` to get all thoughts

- `GET` to get a single thought by its `_id`

- `POST` to create a new thought (the created thought's `_id` is pushed to the associated user's `thoughts` array field)

// example JSON data
{
"thoughtText": "Here's a cool thought...",
"username": "lernantino",
"userId": "5edff358a0fcb779aa7b118b"
}

- `PUT` to update a thought by its `_id` in the `req.body`.

- `DELETE` to remove a thought by its `_id` in the `req.body`.

---

**`/api/thoughts/:thoughtId/reactions`**

- `POST` to create a reaction stored in a single thought's `reactions` array field

- `DELETE` to pull and remove a reaction by the reaction's `reactionId` value

## Questions

If you have any questions about the repo, open an issue on the repo [![SeeYouThursday](https://img.shields.io/badge/SeeYouThursday-TheNextThot-blue)](https://github.com/SeeYouThursday/The-Next-Thot).
