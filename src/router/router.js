const express = require("express")

const router = express.Router()

const {getCities, getCity, addCity, deleteCity, updateCity} = require("../controllers/citiesController")
const { getItineraries, getItinerary, getItineraryByCity, addItinerary, updateItinerary, deleteItinerary } = require("../controllers/itinerariesController")

router.get("/cities", getCities)
router.get("/city/:id", getCity)
router.post("/cities", addCity)
router.put("/city/:id", updateCity)
router.delete("/cities", deleteCity)

router.get("/itineraries", getItineraries)
router.get('/itinerariesbycity', getItineraryByCity);
router.get("/itinerary/:id", getItinerary)
router.post("/itineraries", addItinerary)
router.put("/itinerary/:id", updateItinerary)
router.delete("/itinerary", deleteItinerary)


module.exports = router