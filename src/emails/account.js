const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SEND_GRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'mocheizz@gmail.com',
        subject: 'Thank for joinng us',
        text: `Welcome to the app, ${name}. Let me know how get along with the app.`
    });
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'mocheizz@gmail.com',
        subject: 'Member cancelation',
        text: `We sorry to see you go, ${name}. Let me know why you cancel from the app.`
    });
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}