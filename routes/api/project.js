const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");
const passport = require("passport");
const validateProjectInput = require('../../validation/project');

const Project = require('../../models/Project');

router.get('/', (req,res,next) => {
    res.send("Project Page");
})

router.post('/', passport.authenticate("jwt", { session: false }) ,(req,res,next) => {
    const {errors,isValid} = validateProjectInput(req.body);
    console.log(req.body);
    if (!isValid) {
        // Return any errors with 400 status
        return res.status(400).json(errors);
      }

    let projectDetails = new Project({
        user: req.user.id,
        projectname: req.body.projectname,
        stack: req.body.stack,
        description: req.body.description,
        from: req.body.from,
        to: req.body.to,
        current: req.body.current
    })
    projectDetails
            .save()
            .then(project => {
                res.json(project)
            })
            .catch(err => {
                next(err);
            })
});

module.exports = router;