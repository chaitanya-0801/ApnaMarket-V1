const express = require("express");
const { createAccount,login } = require("../Controllers/User");
const { generateOTP, verifyOTP } = require("../Controllers/OTP");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("User route working");
});

router.post("/account", createAccount);
router.post("/login", login);
router.post("/get-otp", generateOTP);
router.post("/verify-otp", verifyOTP);

module.exports = router;
