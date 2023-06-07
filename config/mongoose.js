//connecting to database using mongoose
const mongoose= require('mongoose');

//creating our new database
mongoose.connect(`mongodb://127.0.0.1/polling`);

//connecting to databse
const db= mongoose.connection;

//checking the connection as successful or not
db.on('error', console.error.bind(console, 'Error connecting to mongoDb'));

db.once('open', function() {
    console.log('Successfully connected to the database');
});

module.exports= db;