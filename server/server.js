const express = require('express')
const cors = require("cors");
const data = require("./db.json");
const fs = require('fs');
const app = express();
app.use(cors({ origin: true, credentials: true }))
app.use(express.json())
app.use(express.static('../dist'))
app.use(express.urlencoded())
app.post('/login', (req, res, next) => {
    let { email, password } = req.body;
    try {
        let isRegistered = data.find(item => item.email === email);
        if (isRegistered) {

            return res.status(200).json({ ...isRegistered, logged: true })
        } else {
            return res.status(200).json({ message: "user not registered", logged: false })
        }
    } catch (error) {
        return res.status(500).json(error);
    }
})
app.post('/Register', (req, res, next) => {
    let { email, password, name } = req.body;
    try {
        let isRegistered = data.find(item => item.email === email);
        if (isRegistered) {
            return res.status(200).json({ 
                message: "user is already registered", 
                logged: false, 
                })
        } else {
            data.push({
                email,
                password,
                logged: false,
                name
            });
            fs.writeFileSync("db.json", JSON.stringify(data))
            return res.status(200).json({ message: "user register successfully", logged: false })
        }
    } catch (error) {
        return res.status(500).json(error);
    }
})

app.listen(3000, () => {
    console.log(`app is running on port 3000...`)
})