const ProfileModel = require('../Models/Profile')
const UserFullModel = require('../Models/UserNew')

const NewUser = async (req, res) => {
    try {
        const { firstName, lastName, email } = req.body;
        const newProfile = await ProfileModel.create({
            ShopName: null,
            PhoneNo:null
        })

        const newUser = await UserFullModel.create({ firstName, lastName, email, additionalDetails: newProfile._id });
        
        res.status(200).json({
            message: "Created Successfully",
            newProfile,
            newUser
        })
        
    } catch (error) {
        res.status(500).json({
            message:error.message,
        })
    }
}

module.exports = { NewUser };