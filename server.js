const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Email server");
});

app.post('/emailServer', (req, res) => {
    const emailData = req.body;

    //Add logic here


    res.json({ message: 'Email sent successfully!', emailData });
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})