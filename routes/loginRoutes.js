const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../schemas/UserSchema');

app.set("view engine", "pug");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));

router.get("/", (req, res, next) => res.status(200).render("login"))

router.post("/",async (req, res, next) => {

    const payload = req.body;

    if(payload.logUsername && payload.logPassword) {
        const searchedUser = await User.findOne({
            $or: [
                { username: payload.logUsername },
                { password: payload.logPassword },
            ]
        }).catch((error) => {
            console.log(error);
            payload.errorMessage = "Something went wrong. Please try again.";
            res.status(200).render("login", payload);
        })

        if(searchedUser != null) {
            let result = await bcrypt.compare(req.body.logPassword, searchedUser.password);

            if(result === true) {
                req.session.user = searchedUser;
                return res.redirect("/");
            }
        }

        payload.errorMessage = "Login credentials incorrect. Please try again.";
        return res.status(200).render("login", payload);
    }

    payload.errorMessage = "Make sure each field has a valid value.";
    res.status(200).render("login");
})

module.exports = router;