'use strict';

const mongoose = require('mongoose')

mongoose.set('useCreateIndex', true)

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName:  { type: String, required: true, trim: true, minlength: 1, maxlength: 10, },
    lastName:  { type: String, required: true, trim: true, minlength: 1, maxlength: 10, },
    username:  { type: String, required: true, trim: true, unique: true, minlength: 2, maxlength: 20, },
    email:  { type: String, required: true, trim: true, unique: true, minlength: 3, maxlength: 40 },
    password:  { type: String, required: true, },
    profilePicture:  { type: String, default: "/images/defaultProfilePicture.png"},
}, { timestamps: true });

let User = mongoose.model('User', UserSchema);

module.exports = User;