const router = require('express').Router();

//TODO require in routes from routes folder
const { getSingleUser, getPosts, createUser } = require('../../controllers');

router.route('/').get(getUsers).post(createUser);

router.route('/:thoughtId').get(getSingleUser);

module.exports = router;
