const express = require("express");

const Application = require("../models/application");
const passport = require("passport");

const router = express.Router();

router.get("/test", (req, res) => res.json({ msg: "application works" }));

router.post("/apply", (req, res) => {
  const { totalAmount, monthlyInstalement, rate } = req.body;
  const newApplication = new Application({
    totalAmount,
    monthlyInstalement,
    rate
  });
  newApplication
    .save()
    .then(application => res.json(application))
    .catch(err => res.send("error"));
});

router.get(
  "/getApplications",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Application.collection
      .find()
      .toArray()
      .then(allApps => res.json(allApps))
      .catch(err => res.send("get applications error"));
  }
);
router.delete("/getApplications/:_id", (req, res) => {
  const { _id } = req.params;
  Application.findOneAndDelete({ _id })
    .then(application => res.send(application))
    .catch(err => res.send("error"));
});
module.exports = router;
