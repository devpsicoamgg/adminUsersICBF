require('dotenv').config();
const transporter = require('./emailConfig');
const { ACCOUNT_GOOGLE  } = process.env;

function sendEmail(to, subject, text) {
    const mailOptions = {
        from: ACCOUNT_GOOGLE,
        to: to,
        subject: subject,
        html: text
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error al enviar el correo:', error);
        } else {
            console.log('Correo electrónico enviado:', info.response);
        }
    });
}

module.exports = sendEmail;
