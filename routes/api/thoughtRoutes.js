const router = require('express').Router();

//TODO require in routes from routes folder
const {
  getSingleUser,
  getUsers,
  createUser,
} = require('../../controllers/userController');

router.route('/').get(getUsers);
// .post(createUser);

router.route('/:thoughtId').get(getSingleUser);

module.exports = router;
