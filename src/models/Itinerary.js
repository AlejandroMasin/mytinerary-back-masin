const { Schema, model, Types } = require('mongoose');

const schemaItinerary = new Schema({

    nombre: {
        type: String,
        required: true,
    },
    descripcion: {
        type: String,
    },
    precio: {
        type: Number,
        required: true,
    },
    duracion: {
        type: String,
        required: true,
    },
    likes: [{
        type: String,
        required: true,
    }],
    hashtags: [{
        type: String,
        required: true,
    }],
    _ciudad: {
        type: Types.ObjectId, 
        ref: 'City',
    },

});

const Itinerary = model("Itinerary", schemaItinerary);

module.exports = Itinerary;
