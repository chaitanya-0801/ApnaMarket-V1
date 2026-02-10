const NewAccountModel = require("../Models/Login");


const Auth = async (req, res,next) => {
    try {

        const { email, accountType} = req.body;
        const user = await NewAccountModel.findOne({ email });

        if (accountType != user.accountType)
        {
             return res.status(500).json({
                message:"Account Mismatch From MiddelWare",
            })
        }
        next()
        
    } catch (error) {
        return res.status(500).json({
      message: error.message,
    });
    }
}

module.exports={Auth}