const { Schema, model, Types } = require('mongoose');

const schemaItinerary = new Schema({

    user: {
        type: String,
    },
    image: {
        type: String,
    },
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
    activities: [{
        type: String,
    }],
    comments: [{
        type: String,
    }],
    _ciudad: {
        type: Types.ObjectId, 
        ref: 'City',
    },

});

const Itinerary = model("Itinerary", schemaItinerary);

module.exports = Itinerary;
