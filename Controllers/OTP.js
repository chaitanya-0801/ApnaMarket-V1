const OTPModel = require("../Models/OTP");
const otpGenerator = require("otp-generator");
const sendMail = require("../Config/mailSender");
const otpTemplate = require("../MailTemplete/otpVerification");

const generateOTP = async (req, res) => {
  try {
    const { email } = req.body;
    const otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
      digits: true,
    });

    const newOtp = await OTPModel.create({
      otp,
      email,
    });

    sendMail(email, "OTP", otpTemplate(otp));

    res.status(200).json({
      newOtp,
      message: "Otp Genrated Successfully",
    });
  } catch (error) {
    res.status(500).json({
      error: "Failed",
      error: error.message,
    });
  }
};

const verifyOTP = async (req, res) => {
  try {
    const { email, otp } = req.body;
    const user = await OTPModel.findOne({ email: email });

    if (!user) {
      res.status(500).json({
        message: "Enter again",
      });
    }
    console.log(user);
    if (user.otp != otp) {
      console.log(user?.email);
      res.status(500).json({
        message: "Wrong Otp",
        //  error:error.message,
      });
    }

    if (user.otp == otp && user.email == email) {
      res.status(200).json({
        message: "Verified",
        //  error:error.message,
      });
    }
  } catch (error) {
    res.status(500).json({
      error: "Failed",
      error: error.message,
    });
  }
};

module.exports = { generateOTP, verifyOTP };
