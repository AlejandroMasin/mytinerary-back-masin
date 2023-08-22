const { Schema, model } = require('mongoose');

const schemaClient = new Schema({
    name: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    }
});

const Client = model("Client", schemaClient);

module.exports = Client;


