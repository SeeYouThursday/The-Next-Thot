const User = require('../models/User');

const addFriend = async (req, res) => {
  //find first user
  try {
    const user = { _id: req.params.userId };
    const friend = req.params.friendId;
    const addedFriend = { $addToSet: { friends: friend } };
    // find first user
    const userCheck = await User.findById(user._id);
    //find second user
    const friendCheck = await User.findById(friend);

    if (!userCheck || !friendCheck) {
      return res.status(404).json({ message: `User not found` });
    }

    const addFriendHere = await User.findOneAndUpdate(user, addedFriend, {
      runValidators: true,
      new: true,
    });

    //update friends array for both
    const addMeBackFriend = await User.findOneAndUpdate(
      { _id: friend },
      {
        $addToSet: { friends: req.params.userId },
      },
      {
        runValidators: true,
        new: true,
      }
    );

    res.json({ addFriendHere, addMeBackFriend });
  } catch (err) {
    res.json({ message: `Could not find user: ${err.message}` });
  }
};

const deleteFriend = async (req, res) => {
  try {
    const user = await User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: req.params.friendId } },
      { runValidators: true, new: true }
    );
    const exFriend = await User.findOneAndUpdate(
      { _id: req.params.friendId },
      { $pull: { friends: req.params.userId } },
      { runValidators: true, new: true }
    );

    if (!user || !exFriend) {
      return res
        .status(404)
        .json({ message: `No user found with that ID  ${err.message}` });
    }

    res.json({
      message: `You are no longer friends with user: ${req.params.friendId}`,
    });
  } catch (err) {
    res.json({ message: `Could not find user: ${err.message}` });
  }
};

module.exports = { addFriend, deleteFriend };
