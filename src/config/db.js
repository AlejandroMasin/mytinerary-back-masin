const mongoose = require('mongoose');
require('dotenv').config();

const URI = process.env.DB_USER
const connectDB = () => {
    mongoose.connect(URI)
        .then(() =>{
            console.log("Connect successful to database.")
        })
        .catch(()=> {
            console.log("Error connecting to database")
        })
}

module.exports = connectDB
