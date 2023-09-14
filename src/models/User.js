const { boolean } = require('joi');
const { Schema, model } = require('mongoose');

const schemaUser = new Schema({
    name: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        default: "https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
    },
    country: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    is_online: {
        type: Boolean,
        default: false
    }
},
    //  { timestamps: true }
);

const User = model("User", schemaUser);

module.exports = User;