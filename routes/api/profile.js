const express = require('express');
const router = express.Router();

// @route   GET api/profle/test
// @desc    Tests profile route
// @access  Public
router.get('/tests',(req,res) => res.json({mssg:'Profile Works'
}));

module.exports = router
