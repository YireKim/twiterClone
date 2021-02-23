'use strict';

const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true)
mongoose.set('useUnifiedTopology', true)
mongoose.set('useFindAndModify', false)

const dbUrl = 'mongodb+srv://admin:1150303@twitterclonecluster0.xj5f7.mongodb.net/TWITTER_CLONE0_DB?retryWrites=true&w=majority';

class Database {

    constructor() {
        this.connect();
    }

    connect() {
        mongoose.connect(dbUrl)
        .then(() => {
            console.log('Database connection successful.');
        })
        .catch((err) => {
            console.log('Database connection error : ' + err +'.');
        })
    }
}

module.exports = new Database()

// const client = new MongoClient('mongodb://localhost/test');
// const coll = client.db('test').collection('test');
// coll.find().toArray(docs => console.dir(docs));