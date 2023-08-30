const express = require("express")

const router = express.Router()

const {getCities, getCity, addCity, deleteCity, updateCity} = require("../controllers/citiesController")
const { getItineraries, getItinerary, getItineraryByCity, addItinerary } = require("../controllers/itinerariesController")

router.get("/cities", getCities)
router.get("/city/:id", getCity)
router.post("/cities", addCity)
router.delete("/cities", deleteCity)
router.put("/city/:id", updateCity)

router.get("/itineraries", getItineraries)
router.get("/itineraries/:id", getItineraryByCity)
router.get("/itinerary/:id", getItinerary)
router.post("/itineraries", addItinerary)

module.exports = router