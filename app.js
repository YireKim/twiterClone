'use strict';

const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const app = express();
const port = 3003;
const path = require('path');
const mongoose = require('./database');
const middleware = require('./middleware');

const server = app.listen(port, () => {
    console.log("Server listening on port : " + port);
})

app.set("view engine", "pug");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(session({
    secret: "@behold",
    resave: true,
    saveUninitialized: false,
}));

// Routes
const loginRoute = require('./routes/loginRoutes');
const registerRoute = require('./routes/registerRoutes');
const logoutRoute = require('./routes/logout');

app.use("/login", loginRoute);
app.use("/register", registerRoute);
app.use("/logout", logoutRoute);

app.get("/", middleware.requireLogin, (req, res, next) => {

    var payload = {
        pageTitle: "Home",
        userLoggedIn: req.session.user,
    }

    res.status(200).render("home", payload)
})
