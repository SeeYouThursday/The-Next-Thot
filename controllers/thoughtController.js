const Thought = require('../models/Thought');
const User = require('../models/User');

module.exports = {
  //Get all thoughts (tested in Insomnia)
  async getThoughts(req, res) {
    try {
      const thought = await Thought.find({}).select('-__v');
      //Checking for empty thoughts
      thought.length === 0
        ? res.status(404).json({ message: 'No thoughts found! Add a thought!' })
        : res.status(200).json(thought);
    } catch (err) {
      console.error({ message: err });
      return res.status(500).json(err);
    }
  },
  //Get One Thought by Id (tested in Insomnia)
  async getSingleThought(req, res) {
    try {
      const id = { _id: req.params.thoughtId };
      const thought = await Thought.findOne(id).select('-__v');

      !thought
        ? res.status(404).json({ message: 'No thought found with that ID' })
        : res.status(200).json(thought);
    } catch (err) {
      console.error({ message: err });
      return res.status(500).json(err);
    }
  },
  //Create a New Thought (tested in Insomnia)
  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      console.log(thought);
      const { userId } = req.body;
      const update = { $addToSet: { thoughts: thought._id } };
      const addToUser = await User.findByIdAndUpdate(userId, update);
      console.log(addToUser);

      //Checking to make sure the thought was added to the user
      !addToUser
        ? res.json({ message: `error adding to user's thoughts` })
        : res.status(200).json({ message: `Thought successfully created!` });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //Update One Thought (tested in Insomnia)
  async updatethought(req, res) {
    try {
      const update = req.body;
      //Find the thought and update with info in the req.body
      const updatedThought = await Thought.findByIdAndUpdate(
        update._id,
        update
      ).select('-__v');
      //Error checking in the query to find and update the thought
      !updatedThought
        ? res.json({
            message: `No Thought found with the id ${req.params.thoughtId}`,
          })
        : res.json({ message: `Thought updated!` }).status(200);
    } catch (err) {
      res.status(500).json({ message: err });
    }
  },
  //Delete One Thought (tested in Insomnia)
  async deleteThought(req, res) {
    try {
      const thoughtId = req.body;
      const thought = await Thought.findByIdAndDelete(thoughtId);
      //Error checking in the query to find and delete the thought
      !thought
        ? res.status(404).json({ message: `Could not find thought` })
        : res.json(`Thought deleted!`);
    } catch (err) {
      res.json({ message: `Could not find thought: ${err.message}` });
    }
  },
};
