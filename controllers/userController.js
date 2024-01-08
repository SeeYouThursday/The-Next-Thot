const User = require('../models/User');
const Thought = require('../models/Thought');

module.exports = {
  //Get all users (tested in Insomnia)
  async getUsers(req, res) {
    try {
      const users = await User.find({}).populate('thoughts').select('-__v');
      res.json(users);
    } catch (err) {
      console.error({ message: err });
      return res.status(500).json(err);
    }
  },
  //Get One User by Id (tested in Insomnia)
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId }).select(
        '-__v'
      );
      //CHECK TO SEE IF USER EXISTS
      !user
        ? res.status(404).json({ message: 'No user found with that ID' })
        : res.json(user);
    } catch (err) {
      console.error({ message: err });
      return res.status(500).json(err);
    }
  },
  //Create a New User (tested in Insomnia)
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //Update One User (tested in Insomnia)
  async updateUser(req, res) {
    try {
      const update = req.body;
      const user = update._id;
      //calls for filter, update, and optional options
      const updatedUser = await User.findByIdAndUpdate(user, update).select(
        '-__v'
      );

      !updatedUser
        ? res.json({
            message: `No User found with the id ${req.params.userId}`,
          })
        : res.status(200).json(`${updatedUser.username} updated`);
    } catch (err) {
      res.status(500);
    }
  },
  //Delete One User
  async deleteUser(req, res) {
    try {
      const userId = req.body;
      const username = await User.findById(userId);
      console.log(username);
      // Remove a user's associated thoughts when deleted.
      const userThoughts = await Thought.deleteMany({
        username: username.username,
      });
      const user = await User.findByIdAndDelete(userId);

      res.json({ message: `User and their Thoughts deleted!` });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
};
