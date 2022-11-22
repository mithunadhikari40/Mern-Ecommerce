const nodemailer = require("nodemailer");
const asyncHandler = require("express-async-handler");

const sendEmail = asyncHandler(async (md, req, res) => {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
<<<<<<< HEAD
      user: "navdeepdahiya753@gmail.com", // generated ethereal user
      pass: "lkqrircnpuabzdqo", // generated ethereal password
=======
      user: "your email", 
      pass: "your key", 
>>>>>>> ac75a5d3c1f970da2d1de59137fffe9bd590a1c4
    },
  });
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Hey 👻" <foo@example.com>', // sender address
    to: md.to, // list of receivers
    subject: md.subject, // Subject line
    text: md.text, // plain text body
    html: md.htm, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
});

module.exports = sendEmail;
