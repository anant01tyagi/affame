const express = require("express");
const router = express.Router();

const User = require("../models/User");
const { body, validationResult } = require("express-validator");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const jwtKey = "qwertyuiopasdfghjklzxcvbnm";

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

    const salt = await bcrypt.genSalt(10);
    let secPassword = await bcrypt.hash(req.body.password, salt);
    try {
      await User.create({
        name: req.body.name,
        password: secPassword,
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

      const pwdCompare = await bcrypt.compare(
        req.body.password,
        useremail.password
      );
      if (!pwdCompare) {
        return res
          .status(400)
          .json({ code: "400", error: "Incorrect email/password." });
      }

      const data = {
        user: {
          id: useremail.id,
        },
      };

      const authToken = jwt.sign(data, jwtKey);

      return res.json({ code: "200", success: true, authToken: authToken });
    } catch (error) {}
  }
);

module.exports = router;
