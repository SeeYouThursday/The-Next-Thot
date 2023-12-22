const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

//boilerplate error handling for incorrect routes
router.use((req, res) => {
  return res.send('Wrong route!');
});

module.exports = router;
