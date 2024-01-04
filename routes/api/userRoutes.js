const router = require('express').Router();

const {
  getSingleUser,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} = require('../../controllers/userController');

const {
  addFriend,
  deleteFriend,
} = require('../../controllers/friendController');

router.route('/').get(getUsers).post(createUser);

//! Change to use req.body below for SINGLE AND UPDATE
router.route('/:userId').get(getSingleUser).delete(deleteUser);

router.route('/:userId/update').put(updateUser);
module.exports = router;

router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);

//
