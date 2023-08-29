const connectDB = require("./db")

connectDB()

const Itinerary = require("../models/Itinerary")

const itineraries = require("../utils/itineraries")

// Usando insertMany para insertar los documentos
Itinerary.insertMany(itineraries)
  .then(() => {
    console.log('Itinerarios insertados con éxito');
  })
  .catch((error) => {
    console.error('Error al insertar itinerarios:', error);
  });