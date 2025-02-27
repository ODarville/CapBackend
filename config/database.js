
require('dotenv').config()


const mongoose = require('mongoose');


mongoose.connect(process.env.DATABASE_URI)

// Executes the given callback function when the connection to MongoDB is open i.e. the connection is successful
mongoose.connection.once("connected", () =>{ 
    console.log(`MongoDB is connected to ${mongoose.connection.name}`);
});