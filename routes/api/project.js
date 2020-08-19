const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");
const passport = require("passport");
const validateProjectInput = require('../../validation/project');

const Project = require('../../models/Project');

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

router.get('/', passport.authenticate("jwt", { session: false }), (req,res,next) => {
    // console.log("Accesssed")
    Project
        .find({user: req.user.id})
        .then(projects => {
            // console.log(projects);
            res.json(projects);
        })
        .catch(err => {
            next(err);
        });
});

router.get("/all", (req, res) => {
    const errors = {};
    // console.log("In All Project")
    Project.find()
      .populate("user", ["name", "avatar"])
      .then(projects => {
        if (!projects) {
          errors.noproject = "There are no projects";
          return res.status(404).json(errors);
        }
  
        res.json(projects);
      })
      .catch(err => res.status(404).json({ project: "There are no projects" }));
  });

router.delete('/:id', passport.authenticate("jwt", {session: false}), (req,res,next) => {
    Project.findOneAndRemove({_id: req.params.id}).then(() => {
        Project.find({user: req.user.id})
           .then((project)=> res.json(project))
        })
})

module.exports = router;