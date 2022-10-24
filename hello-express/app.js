const express = require("express")

const app = express()

const port = 5000

app.listen(port, () => {
    console.log(`listening on PORT ${port}`)
})

app.get("/", (req, res) => {
    res.send(`Hello, home!`)
})

app.get("/testone", (req, res) => {
    res.send("<h1>Hello, <b>testone</b>!</h1>")
})

app.get("/testtwo", (req, res) => {
    res.send(`Hello, testtwo!`)
})

app.get("/:page", (req, res) => {
    // let page = req.params.page
    res.send(`You are on the ${req.params.page} page`)
})