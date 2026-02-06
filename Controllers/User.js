const AccountSchema = require("../Models/UserModel");

const createAccount = async (req, res) => {
  try {
    const { email, password, lastName, firstName } = req.body;

    const newUser = await AccountSchema.create({
      firstName,
      lastName,
      email,
      password,
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

module.exports = { createAccount };
