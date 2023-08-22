const { Schema, model } = require('mongoose');

const schemaCity = new Schema({
    ciudad: {
        type: String,
        required: true,
    },
    imagen: {
        type: String,
        required: true,
    },
    pais: {
        type: String,
        required: true,
    }
});

const City = model("City", schemaCity);

module.exports = City;