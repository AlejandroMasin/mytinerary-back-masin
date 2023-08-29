const express = require("express")

const router = express.Router()

const {getCities, getCity, addCity, deleteCity, updateCity} = require("../controllers/citiesController")
const { getItinerary, addItinerary } = require("../controllers/itinerariesController")

router.get("/cities", getCities)
router.get("/city/:id", getCity)
router.post("/cities", addCity)
router.delete("/cities", deleteCity)
router.put("/city/:id", updateCity)

router.get("/itineraries", getItinerary)
router.post("/itineraries", addItinerary)

module.exports = router