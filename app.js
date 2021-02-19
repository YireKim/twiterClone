const express = require('express')
const app = express()
const port = 3003
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

app.set("view engine", "pug")
app.set("views", "views")

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, "public")))

const middleware = require('./middleware')
app.get("/", middleware.requireLogin, (req, res, next) => {

    var payload = {
        pageTitle: "Home"
    }

    res.status(200).render("home", payload)
})

// Routes
const loginRoute = require('./routes/loginRoutes')
const registerRoute = require('./routes/registerRoutes')
app.use("/login", loginRoute)
app.use("/register", registerRoute)