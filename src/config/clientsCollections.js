const connectDB = require("./db")

connectDB()

const Client = require("../models/Client")

const clients = [
    {
        name: "john",
        lastName: "Johnson",
        age: 16
    },
    {
        name: "Peter",
        lastName: "Pan",
        age: 16
    }
]


// Usando insertMany para insertar los documentos
Client.insertMany(clients)
  .then(() => {
    console.log('Documentos insertados con éxito');
  })
  .catch((error) => {
    console.error('Error al insertar documentos:', error);
  });