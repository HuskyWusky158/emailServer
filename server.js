const nodemailer = require('nodemailer')
const express = require('express')
const cors = require('cors')
const app = express()
const port = 3005

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Email server");
});

app.post('/emailServer', async (req, res) => {
    const emailData = req.body;
    const websiteOwnerEmail = req.body.websiteOwnerEmail;
    const userEmail = req.body.userEmail;
    const feedback = req.body.feedback;
    const feedbackRating = req.body.feedbackRating;
    const requestResponse = req.body.requestResponse;

    let transporter = await nodemailer.createTransport({
        service: 'gmail',
        port: 465,
        secure: true,
        auth: {
            user: 'easyconversions158@gmail.com',
            pass: 'uiio wcws lhig bllx'
        }
    });

    await transporter.sendMail({
        to: websiteOwnerEmail,
        subject: 'Feedback from user',
        html: `<div>
        <h1>You got the following feedback from a user</h1>
        <h3>User email: ${userEmail}</h3>
        <h3>feedbackRating: ${feedbackRating}</h3>
        <h3>feedback: ${feedback}</h3>
        <h3>Request Response: ${requestResponse}</h3>
    </div>`
    }).then(() => {
        console.log('Email sent');

    }).catch(err => {
        console.error(err);
    });

    res.json({ message: 'Email sent successfully!', emailData });
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})