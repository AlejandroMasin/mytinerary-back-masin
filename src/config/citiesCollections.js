const connectDB = require("./db")

connectDB()

const City = require("../models/City")

const cities = require("../utils/cities")


// Usando insertMany para insertar los documentos
City.insertMany(cities)
  .then(() => {
    console.log('Documentos insertados con éxito');
  })
  .catch((error) => {
    console.error('Error al insertar documentos:', error);
  });