let router = require('express').Router();
const scoresCtrl = require('../controllers/scores')

// GET /api/scores
router.get('/scores', scoresCtrl.index);

module.exports = router;