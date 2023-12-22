const Thought = require('../models/Thought');

module.exports = {
  //Get all thoughts
  async getThoughts(req, res) {
    try {
      const thought = await Thought.find({});
      res.json(thought);
    } catch (err) {
      console.error({ message: err });
      return res.status(500).json(err);
    }
  },
  //Get One Thought by Id
  async getSingleThought(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId });

      !thought
        ? res.status(404).json({ message: 'No thought found with that ID' })
        : res.json(thought);
    } catch (err) {
      console.error({ message: err });
      return res.status(500).json(err);
    }
  },
  //Create a New Thought
  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //Update One Thought
  async updatethought(req, res) {
    try {
      const updatedThought = await Thought.findByIdAndDelUpdate(
        req.params.thoughtId
      );

      !deletedthought
        ? res.json({
            message: `No Thought found with the id ${req.params.thoughtId}`,
          })
        : res.json(deletedthought).status(200);
    } catch (err) {
      res.status(500);
    }
  },
  //Delete One Thought
  async deletethought(req, res) {
    await Thought.findByIdAndDelete(req.params.thoughtId),
      function (err, docs) {
        if (err) {
          res.json(err);
        } else {
          res.json({ message: `Deleted Thought ${docs}` });
        }
      };
  },
};
