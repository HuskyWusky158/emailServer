const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

app.post('/emailServer', (req, res) => {
    const emailData = req.body;

    // Send a response back to the client
    res.send('Email received successfully!', emailData);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})