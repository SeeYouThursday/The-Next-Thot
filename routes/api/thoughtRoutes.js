const router = require('express').Router();

//TODO require in routes from routes folder
const {
  getSingleThought,
  getThoughts,
  createThought,
} = require('../../controllers/thoughtController');

router.route('/').get(getThoughts).post(createThought);

router.route('/:thoughtId').get(getSingleThought);

module.exports = router;
