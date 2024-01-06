const Thought = require('../models/Thought');

module.exports = {
  async addReaction(req, res) {
    //find first thought
    try {
      const thoughtId = { _id: req.params.thoughtId };
      const addedReaction = { $addToSet: { reactions: req.body } };

      const reaction = await Thought.findByIdAndUpdate(
        thoughtId,
        addedReaction
      );

      res.json(reaction);
    } catch (err) {
      res.json({ message: `Could not find user: ${err.message}` });
    }
  },
  async deleteReaction(req, res) {
    try {
      res.json(`${reaction} deleted!`);
    } catch (err) {
      res.json({ message: `Could not find thought: ${err.message}` });
    }
  },
};
