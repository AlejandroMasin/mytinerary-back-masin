const { Schema, model, Types } = require('mongoose');

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
    },
    itineraries: [{
        type: Types.ObjectId,
        ref: 'Itinerary',
    }]
}, { timestamps: true });

const City = model("City", schemaCity);

module.exports = City;