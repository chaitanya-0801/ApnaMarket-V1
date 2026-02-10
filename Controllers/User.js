// require("dotenv").config();
const bcrypt = require("bcrypt");
// const pass_encrypt = process.env.PASS_ENCRYPT;
const AccountSchema = require("../Models/UserModel");
const UserModel = require("../Models/User");


const createAccount = async (req, res) => {
  try {
    const { email, password, lastName, firstName } = req.body;

    const user = await AccountSchema.findOne({ email })

    const userName = await UserModel.findOne({ name: firstName })
    console.log(userName)
    
    if (user)
    {
      return res.status(500).json({
        message: "Already",
      })
    }
    // localStorage.setItem("myCat", "Tom");
    // const cat = localStorage.getItem("myCat")
    // console.log(cat)

    async function encryptPassword(pass_encrypt) {
      const newPassWord = await bcrypt.hash(pass_encrypt, 10);
      return newPassWord;
    }

    const hashedPassword = await encryptPassword(password);

    const newUser = await AccountSchema.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    res.status(200).json({
      message: "User Created Successfully",
      newUser,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed",
      error: error.message,
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await AccountSchema.findOne({ email })
    console.log(user);
    const passwordChk = await bcrypt.compare(password, user.password);
    console.log(passwordChk,user.password,password)

    if (!passwordChk) {
      return res.status(500).json({
        message: "not correct pass",
      });
    }
    return res.status(200).json({
      message: "Login Successfull",
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = { createAccount,login };
