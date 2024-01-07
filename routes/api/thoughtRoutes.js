const router = require('express').Router();

const {
  getSingleThought,
  getThoughts,
  createThought,
  deleteThought,
  updatethought,
} = require('../../controllers/thoughtController');
const {
  addReaction,
  deleteReaction,
} = require('../../controllers/reactionController');

router
  .route('/')
  .get(getThoughts)
  .post(createThought)
  .delete(deleteThought)
  .put(updatethought);

router.route('/:thoughtId').get(getSingleThought);

router.route('/:thoughtId/reactions').post(addReaction).delete(deleteReaction);

module.exports = router;
