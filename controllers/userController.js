const User = require('../models/User');

module.exports = {
  //Get all users
  async getUsers(req, res) {
    try {
      const users = await User.find({}).populate('thoughts');
      res.json(users);
    } catch (err) {
      console.error({ message: err });
      return res.status(500).json(err);
    }
  },
  //Get One User by Id
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId });

      !user
        ? res.status(404).json({ message: 'No user found with that ID' })
        : res.json(user);
    } catch (err) {
      console.error({ message: err });
      return res.status(500).json(err);
    }
  },
  //Create a New User
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //Update One User
  async updateUser(req, res) {
    try {
      const updatedUser = await User.findByIdAndDelUpdate(req.params.userId);

      !deletedUser
        ? res.json({
            message: `No User found with the id ${req.params.userId}`,
          })
        : res.json(deletedUser).status(200);
    } catch (err) {
      res.status(500);
    }
  },
  //Delete One User
  async deleteUser(req, res) {
    await User.findByIdAndDelete(req.params.userId),
      function (err, docs) {
        if (err) {
          res.json(err);
        } else {
          res.json({ message: `Deleted User ${docs}` });
        }
      };
  },
};

// **BONUS**: Remove a user's associated thoughts when deleted.

// getSingleUser,
// getUsers,
// createUser,
// updateSingleUser,
// deleteSingleUser,
