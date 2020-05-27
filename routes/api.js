let router = require('express').Router();
// require controller 

// GET /api/scores
router.get('/scores', scoresCtrl.index);

module.exports = router;