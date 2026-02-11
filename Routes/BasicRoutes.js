const express = require("express");
const { createAccount,login } = require("../Controllers/User");
const { generateOTP, verifyOTP } = require("../Controllers/OTP");
const { NewUser } = require('../Controllers/NewUser')
const { SignUp, Login } = require('../Controllers/Auth')
const { Auth } = require('../Middlewares/Auth')
const {sendVerificationLink,verifyLink}=require('../Controllers/EmailVerification')

const router = express.Router();

router.get("/", (req, res) => {
  res.send("User route working");
});

router.post("/account", createAccount);
router.post("/login", login);
router.post("/get-otp", generateOTP);
router.post("/verify-otp", verifyOTP);
router.post("/new-user", NewUser);

router.post("/signup", SignUp,sendVerificationLink);
router.post("/login-new",Auth,Login);
router.post("/sendLink", sendVerificationLink);
router.post("/verifyEmail/:link/email/:email", verifyLink);

module.exports = router;
