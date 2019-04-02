const express = require('express');
const router = express.Router();

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get('/tests',(req,res) => res.json({mssg:'Users Works'
}));

module.exports = router
