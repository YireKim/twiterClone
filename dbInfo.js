mongoose.connect('mongodb+srv://admin:1150303@twitterclonecluster0.xj5f7.mongodb.net/TWITTER_CLONE0_DB?retryWrites=true&w=majority')
.then(() => {
    console.log('Database connection successful.');
})
.catch((err) => {
    console.log('Database connection error : ' + err +'.');
})

const server = app.listen(port, () => {
    console.log("Server listening on port : " + port)
})