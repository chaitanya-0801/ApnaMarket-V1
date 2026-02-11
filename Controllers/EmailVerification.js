const stringGenerator = require("random-string-generator");
const EmailLinkModel = require('../Models/EmailVerification')
const NewAccountModel = require("../Models/Login");
const sendMail  = require('../Config/mailSender');
const emailVerificationTemplete=require('../MailTemplete/EmailVerification')
const emailVerifiedTemplate=require('../MailTemplete/EmailVerifedTemplete')

const sendVerificationLink = async (req, res) => {
    try {
        const { email } = req.body;
        const user = await NewAccountModel.findOne({ email });
        if (user && user.isEmailVerified == 'Yes')
        {
            return res.status(500).json({
                message:"Your Email is already verified please login"
            })
        }

        const verificationString = stringGenerator(50, 'alphanumeric')
        const link=`http://localhost:5000/api/v1/verifyEmail/${verificationString}/email/${email}`

        const sendLinkToMail = await sendMail(email, "Email verification", emailVerificationTemplete(link))
        console.log(sendLinkToMail)
        
        const newVerificationLink = await EmailLinkModel.create({
            link: verificationString,
            email
        })

        return res.status(200).json({
            message: "Link Created",
            newVerificationLink
        })

    } catch (error) {

        return res.status(500).json({
            message:error.message
        })
        
    }
}

const verifyLink = async (req, res) => {
    try {
        const { link,email } = req.params;
        const emailLink = await EmailLinkModel.findOne({ email })
        if (link != emailLink.link)
        {
             return res.status(500).json({
            message:"Email link Expire regenrate",
        })
        }
        else
        {
            const user = await NewAccountModel.updateOne({ "email": email }, { $set: { isEmailVerified: true } });
            sendMail(user.email,"Verified Successfully",emailVerifiedTemplate(user.firstName))
            return res.status(200).json({
                message: "Account Verified",
                user
            })
            
        }

    } catch (error) {
         return res.status(500).json({
            message:error.message
        })
    }
}

module.exports={sendVerificationLink,verifyLink}
