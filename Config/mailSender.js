const mailSender = require("nodemailer");
require("dotenv").config();

const sendMail = async (email, subject, text) => {
  try {
    console.log("Sending mail");
    const transporter = mailSender.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: '"Apna Market" <no-reply@yourapp.com>',
      to: email,
      subject,
      html: `<b>${text}</b>`,
    });
    console.log("Message sent:", info.messageId);
    return { success: true };
  } catch (error) {
    console.error("Email error:", error.message);
    return { success: false, error };
  }
};

module.exports = sendMail;
