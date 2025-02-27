//////////////////////////
////Require Statements////
//////////////////////////

const express = require('express');
const app = express();
const mongoose = require('mongoose');
require("dotenv").config();
require('./config/database.js');

const PORT = 3000;


//////////////////////////
////    Middleware    ////
//////////////////////////

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
    const time = new Date();
  
    console.log(
      `-----
  ${time.toLocaleTimeString()}: Received a ${req.method} request to ${req.url}.`
    );
    if (Object.keys(req.body).length > 0) {
      console.log("Containing the data:");
      console.log(`${JSON.stringify(req.body)}`);
    }
    next();
  });





//////////////////////////
////      Routes      ////
//////////////////////////

const reviewRoutes = require('./routes/review');
app.use('/reviews', reviewRoutes);

//////////////////////////
////      Server      ////
//////////////////////////

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

