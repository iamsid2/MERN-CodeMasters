const express = require('express');
const router = express.Router();


// @route   GET api/posts/test
// @desc    Tests post route
// @access  Public
router.get('/tests',(req,res) => res.json({mssg:'Posts Works'
}));

module.exports = router
