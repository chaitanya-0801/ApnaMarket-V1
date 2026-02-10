const express = require("express");
const { createAccount,login } = require("../Controllers/User");
const { generateOTP, verifyOTP } = require("../Controllers/OTP");
const { NewUser } = require('../Controllers/NewUser')
const { SignUp, Login } = require('../Controllers/Auth')
const {Auth}=require('../Middlewares/Auth')

const router = express.Router();

router.get("/", (req, res) => {
  res.send("User route working");
});

router.post("/account", createAccount);
router.post("/login", login);
router.post("/login-new",Auth,Login);
router.post("/signup", SignUp);
router.post("/get-otp", generateOTP);
router.post("/verify-otp", verifyOTP);
router.post("/new-user", NewUser);

module.exports = router;
