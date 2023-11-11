const express = require("express");
const router = express.Router();

const User = require("../models/User");
const { body, validationResult } = require("express-validator");

const bcrypt = require("bcryptjs");

router.post(
  "/createuser",
  [
    body("email", "Please enter a valid Email.").isEmail(),
    body("password", "Password should be minimum 5 characters.").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).json({ errors: result.array() });
    }

    try {
      await User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
        location: req.body.location,
      });
      res.json({ s: true });
    } catch (error) {
      console.log(error);
      res.json({ s: true });
    }
  }
);

router.post(
  "/loginuser",
  [
    body("email", "Please enter a valid Email.").isEmail(),
    body("password", "Password should be minimum 5 characters.").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).json({ errors: result.array() });
    }

    let email = req.body.email;
    try {
      let useremail = await User.findOne({ email });
      if (!useremail) {
        return res
          .status(400)
          .json({ code: "400", error: "Incorrect email/password." });
      }

      if (req.body.password !== useremail.password) {
        return res
          .status(400)
          .json({ code: "400", error: "Incorrect email/password." });
      }

      return res.json({ code: "200", success: true });
    } catch (error) {}
  }
);

module.exports = router;
