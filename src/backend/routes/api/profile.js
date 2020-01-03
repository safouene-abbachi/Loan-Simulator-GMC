const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");

const router = express.Router();

//load profile
const Profile = require("../models/profile");
//load user profile
const User = require("../models/User");

router.get("/test", (req, res) => res.json({ msg: "profile works" }));

// route get /api/profile
//desc  get current user profile
// access  private

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};

    Profile.findOne({ user: req.user.id })
      .populate("user")
      .then(profile => {
        if (!profile) {
          console.log(profile);
          errors.noprofile = "there is no profile";
          return res.status(404).json(errors);
        }

        res.json(profile);
      })
      .catch(err => res.status(404).json(err));
  }
);

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id }).then(profile => {
      if (profile) {
        return res.status(404).json("this user has already a profile");
      }
      const newProfile = new Profile({
        user: req.user.id
      });
      newProfile
        .save()
        .then(profile => res.json(profile))
        .catch(err => console.log(err));
    });
  }
);

module.exports = router;
