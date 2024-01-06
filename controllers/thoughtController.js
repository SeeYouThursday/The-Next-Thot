const Thought = require('../models/Thought');

module.exports = {
  //Get all thoughts
  async getThoughts(req, res) {
    try {
      const thought = await Thought.find({});
      res.status(200).json(thought);
    } catch (err) {
      console.error({ message: err });
      return res.status(500).json(err);
    }
  },
  //Get One Thought by Id
  async getSingleThought(req, res) {
    try {
      const id = { _id: req.params.thoughtId };
      const thought = await Thought.findOne(id);

      !thought
        ? res.status(404).json({ message: 'No thought found with that ID' })
        : res.status(200).json(thought);
    } catch (err) {
      console.error({ message: err });
      return res.status(500).json(err);
    }
  },
  //Create a New Thought
  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      res.status(200).json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //Update One Thought
  async updatethought(req, res) {
    try {
      const thought = req.params.thoughtId;
      const update = req.body;
      //Find the thought and update with info in the req.body
      const updatedThought = await Thought.findByIdAndUpdate(thought, update);

      !updatedThought
        ? res.json({
            message: `No Thought found with the id ${req.params.thoughtId}`,
          })
        : res.json(updatedThought).status(200);
    } catch (err) {
      res.status(500).json({ message: err });
    }
  },
  //Delete One Thought //
  async deleteThought(req, res) {
    try {
      const thoughtId = req.body;
      const thought = await Thought.findByIdAndDelete(thoughtId);
      res.json(`${thought} deleted!`);
    } catch (err) {
      res.json({ message: `Could not find thought: ${err.message}` });
    }
  },
};
