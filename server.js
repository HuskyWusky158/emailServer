const nodemailer = require('nodemailer')
const express = require('express')
const app = express()
const port = 3005

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Email server");
});

app.post('/emailServer', async (req, res) => {
    const emailData = req.body;

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
        to: 'easyconversions158@gmail.com',
        subject: 'hello',
        html: '<h1>Hi how are you</h1>'
    }).then(()=>{
        console.log('Email sent');
    
    }).catch(err=>{
        console.error(err);
    });

    res.json({ message: 'Email sent successfully!', emailData });
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})