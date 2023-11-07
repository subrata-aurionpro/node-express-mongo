const mongoose = require("mongoose");
const express = require("express");
const app = express();
const { MONGO_URL, PORT} = process.env;


require('dotenv').config();

const database = async () => {
    try {
        mongoose
        .connect(MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => console.log("MongoDB is  connected successfully"))
        .catch((err) => console.error(err));
 
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    database
};