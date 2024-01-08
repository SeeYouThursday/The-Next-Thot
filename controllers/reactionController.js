const Thought = require('../models/Thought');

module.exports = {
  //Add Reaction (tested in Insomnia)
  async addReaction(req, res) {
    //find thought
    try {
      const thoughtId = req.params.thoughtId;
      const addedReaction = { $addToSet: { reactions: req.body } };
      // Add Reaction and Update Thought
      //Thought is updated in the author's thoughts array as well.
      const reaction = await Thought.findByIdAndUpdate(
        thoughtId,
        addedReaction,
        { runValidators: true, new: true }
      ).select('-__v');

      res.status(200).json(reaction);
    } catch (err) {
      res.json({ message: `Could not find user: ${err.message}` });
    }
  },
  // Delete Reaction (tested in Insomnia)
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
      //Handling No Reaction with the ID Found
      if (!reaction) {
        return res.status(404).json({ message: `Reaction not found!` });
      }
      return res.json(`Reaction deleted!`);
    } catch (err) {
      //err.message provides a more detailed message about the error.
      res.json({ message: `Could not find thought: ${err.message}` });
    }
  },
};
