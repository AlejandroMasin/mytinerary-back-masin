const express = require("express")

const router = express.Router()


const {getClients, getClient, addClient, deleteClient, updateClient} = require("../controllers/clientsController")

const {getCities, getCity, addCity, deleteCity, updateCity} = require("../controllers/citiesController")


router.get("/clients", getClients)
router.get("/client/:id", getClient)
router.post("/clients", addClient)
router.delete("/clients", deleteClient)
router.put("/client/:id", updateClient)

router.get("/cities", getCities)
router.get("/city/:id", getCity)
router.post("/cities", addCity)
router.delete("/cities", deleteCity)
router.put("/city/:id", updateCity)


module.exports = router