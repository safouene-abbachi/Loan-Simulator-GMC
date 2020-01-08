const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "abbachisafouene@gmail.com",
    pass: "284682Pipo"
  }
});

const mailOptions = {
  from: "abbachisafouene@gmail.com",
  to: "safouene-abbachi@hotmail.fr",
  subject: "Loan Request",
  text: `
  your request is being processed`
};

transporter.sendMail(mailOptions, function(error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
