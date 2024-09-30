const express = require('express')
const app = express()
app.get("/api", (req, res) => {
    res.json({ users: ["userOne", "UserTwo"]})
})

app.listen(5173, () => {console.log("server syarted")})     