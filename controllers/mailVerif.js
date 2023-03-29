const nodemailer = require("nodemailer");
const URL = process.env.URL;
var transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "0abc81cc827667",
      pass: "57840109be310f",
    },
  });

  module.exports = {
    mail_verif: (item) => {
        transport.sendMail({
            from: "admin@test.com",
            to: item.email,
            subject: `hello ${item.__t} ${item.name}`,
            html: `<a href="${URL}/verify/${item.verf_code}"> verify </a>`,
          });
    }
  }