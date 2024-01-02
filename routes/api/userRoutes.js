const router = require('express').Router();

const {
  getSingleUser,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} = require('../../controllers/userController');

router.route('/').get(getUsers).post(createUser);

//TODO update function work out error
router.route('/:userId').get(getSingleUser).delete(deleteUser);
//    //! Error asking for callback function

router.route('/:userId/update').put(updateUser);
module.exports = router;
