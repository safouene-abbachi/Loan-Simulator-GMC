const express = require("express");

const Application = require("../models/application");
const passport = require("passport");
const nodemailer = require("nodemailer");
const router = express.Router();

// Mail sending config
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "abbachisafouene@gmail.com",
    pass: "284682Pipo"
  }
});

const defaultMailOptions = {
  from: "abbachisafouene@gmail.com",
  subject: "Loan Request",
  text: `
  your request is being processed. You will receive a mail as soon as your request is approved.`
};

router.get("/test", (req, res) => res.json({ msg: "application works" }));

router.post("/apply", (req, res) => {
  const {
    totalAmount,
    monthlyInstalement,
    rate,
    username,
    usermail,
    bankname
  } = req.body;
  const newApplication = new Application({
    totalAmount,
    monthlyInstalement,
    rate,
    username,
    usermail,
    bankname
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

router.post("/sendmail", (req, res) => {
  const mailOptions = { ...defaultMailOptions, ...req.body };
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
});
module.exports = router;
