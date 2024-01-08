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

router
  .route('/')
  .get(getUsers)
  .post(createUser)
  .put(updateUser)
  .delete(deleteUser);

router.route('/:userId').get(getSingleUser);

router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);

module.exports = router;
