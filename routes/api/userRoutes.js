const router = require('express').Router();

const {
  getSingleUser,
  getUsers,
  createUser,
  updateSingleUser,
  deleteUser,
} = require('../../controllers/userController');

router.route('/').get(getUsers).post(createUser);

//TODO checkout these functions after written to make sure they will work
router.route('/:userId').get(getSingleUser).delete(deleteUser);
//   .put(updateSingleUser) //! Error asking for callback function
//

module.exports = router;
