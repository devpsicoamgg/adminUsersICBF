require("dotenv").config();

const nodemailer = require("nodemailer");

const { GOOGLE_ADMIN_PASSWORD, ACCOUNT_GOOGLE } = process.env;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: ACCOUNT_GOOGLE,
    pass: GOOGLE_ADMIN_PASSWORD,
  },
});

module.exports = transporter;
