const Thought = require('../models/Thought');

module.exports = {
  //Add Reaction (tested)
  async addReaction(req, res) {
    //find first thought
    try {
      const thoughtId = req.params.thoughtId;
      const addedReaction = { $addToSet: { reactions: req.body } };

      const reaction = await Thought.findByIdAndUpdate(
        thoughtId,
        addedReaction,
        { runValidators: true, new: true }
      );

      res.status(200).json(reaction);
    } catch (err) {
      res.json({ message: `Could not find user: ${err.message}` });
    }
  },
  // Delete Reaction (tested)
  async deleteReaction(req, res) {
    try {
      const thoughtId = req.params.thoughtId;
      const reactionId = req.body;
      const deleteReaction = { $pull: { reactions: reactionId } };

      const reaction = await Thought.findByIdAndUpdate(
        thoughtId,
        deleteReaction,
        { runValidators: true, new: true }
      );

      if (!reaction) {
        return res.status(404).json({ message: `Reaction not found!` });
      }
      return res.json(`Reaction deleted!`);
    } catch (err) {
      res.json({ message: `Could not find thought: ${err.message}` });
    }
  },
};
