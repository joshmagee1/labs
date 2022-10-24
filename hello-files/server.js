const express = require("express")

const app = express()

const port = 1000

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})

app.get("/contact", (req, res) => {
    res.sendFile(__dirname + "/public/contact.html")
})

app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/public/about.html")
})

app.use(express.static("public"))