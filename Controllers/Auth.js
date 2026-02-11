const bcrypt = require("bcrypt");
const NewAccountModel = require("../Models/Login");
const ProfileModel = require("../Models/Profile");

const SignUp = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      accountType,
    } = req.body;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !confirmPassword ||
      !accountType
    ) {
      return res.status(500).json({
        message: "All Fields Required",
      });
    }

    if (password != confirmPassword) {
      return res.status(500).json({
        message: "Password Not match",
      });
    }

    const checkUser = await NewAccountModel.findOne({ email });

    if (checkUser) {
      return res.status(500).json({
        message: "User Already Exist",
      });
    }

    const hashedPass = await bcrypt.hash(password, 10);

    const newProfile = await ProfileModel.create({
      ShopName: null,
      PhoneNo: null,
    });

    const newUser = await NewAccountModel.create({
      accountType,
      firstName,
      lastName,
      email,
      password: hashedPass,
      additional: newProfile._id,
    });
    newUser.password=undefined
    return res.status(200).json({
      message: "User Created Successfully",
      newUser,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const Login = async (req, res) => {
    try {

        const { email, password } = req.body;
      const user = await NewAccountModel.findOne({ email });
      
      if (user.isEmailVerified != 'Yes')
      {
        return res.status(500).json({
          message:"Please Verify Email First",
        })
      }

        const checkPassword = bcrypt.compare(password, user.password);

        // if (accountType != user.accountType)
        // {
        //      return res.status(500).json({
        //         message:"Account Mismatch",
        //     })
        // }

        if (!checkPassword)
        {
            return res.status(500).json({
                message:"Wrong Password",
            })
        }
        
        return res.status(200).json({
            message:"Login Successfull",
        })
        
    } catch (error) {
        return res.status(500).json({
      message: error.message,
    });
    }
}

module.exports = { SignUp,Login };
