const router = require('express').Router();

const {
  getSingleThought,
  getThoughts,
  createThought,
  deleteThought,
} = require('../../controllers/thoughtController');
const {
  addReaction,
  deleteReaction,
} = require('../../controllers/reactionController');

router.route('/').get(getThoughts).post(createThought).delete(deleteThought);

//! Change to req.body and add to the above route
router.route('/:thoughtId').get(getSingleThought);

router.route('/:thoughtId/reactions').post(addReaction).delete(deleteReaction);

module.exports = router;
