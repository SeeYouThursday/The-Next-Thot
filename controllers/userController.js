const User = require('../models/User');
const Thought = require('../models/Thought');

// const userThoughts = async (userId) => {
//   try {
//     await Thought.aggregate([
//       { $match: { _id: new ObjectId(userId) } },
//       {
//         $unwind: '$thoughts',
//       },
//     ]);
//   } catch (err) {
//     console.log(err);
//   }
// };

module.exports = {
  //Get all users
  async getUsers(req, res) {
    try {
      const users = await User.find({}).populate('thoughts').select('-__v');
      res.json(users);
    } catch (err) {
      console.error({ message: err });
      return res.status(500).json(err);
    }
  },
  //Get One User by Id
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
      const user = req.params.userId;
      const update = req.body;
      //calls for filter, update, and optional options
      const updatedUser = await User.findByIdAndUpdate(user, update).select(
        '-__v'
      );

      !updatedUser
        ? res.json({
            message: `No User found with the id ${req.params.userId}`,
          })
        : res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500);
    }
  },
  //Delete One User
  async deleteUser(req, res) {
    try {
      const user = await User.findByIdAndDelete(req.params.userId);
      res.json(user);
    } catch (err) {
      res.status(500).json({ message: err });
    }
  },
};

// **BONUS**: Remove a user's associated thoughts when deleted.
