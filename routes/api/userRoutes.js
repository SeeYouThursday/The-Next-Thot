const router = require('express').Router();

//TODO require in routes from routes folder
const {
  getSingleUser,
  getUsers,
  createUser,
  updateSingleUser,
  deleteSingleUser,
} = require('../../controllers/userController');

router.route('/').get(getUsers).post(createUser);

//TODO checkout these functions after written to make sure they will work
router.route('/:userId').get(getSingleUser);
//   .put(updateSingleUser) //! Error asking for callback function
//   .delete(deleteSingleUser);

module.exports = router;
