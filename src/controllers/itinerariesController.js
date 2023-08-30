const Itinerary = require("../models/Itinerary");
const City = require("../models/City");

const getItineraries = async (req, res) => {

    try {
        let Itineraries = await Itinerary.find()

        res.json(
            Itineraries
        )
    } catch (err) {
        res.status(500).json({ message: err.message })
    }

}

const getItinerary = async (req, res) => {

    try {
        const { id } = req.params

        let itineraryEncontrado = await Itinerary.findById(id)

        res.status(200).json(itineraryEncontrado)

    } catch (err) {
        res.status(500).json({ message: err })
    }

}

const getItineraryByCity = async (req, res) => {

    try {
        const { id } = req.query

        let itinerariesEncontrados = await Itinerary.find(City._id == id)

        console.log(id);
        res.status(200).json(itinerariesEncontrados)

    } catch (err) {
        res.status(500).json({ message: err })
    }

}

const addItinerary = async (req, res) => {

    try {
        let { id } = req.query

        let cityFound = await City.findById(id)

        let payload = req.body

        let newItinerary = await Itinerary.create(payload)

        // let newItinerary = await Itinerary.create({
        //     nombre: "Museos y Arte en la Ciudad de la Luz",
        //     descripcion: "Un itinerario de tres días en París centrado en la visita a museos de renombre, como el Louvre, el Museo de Orsay y el Centro Pompidou, para apreciar la diversidad del arte francés.",
        //     precio: 5,
        //     duracion: "2 hours.",
        //     likes: ["JohnDoe1234", "JaneDoe5678", "Pepito1234"],
        //     hashtags: ["#Travel", "#Adventure", "#Photography"],
        //     _ciudad: cityFound
        // })

        await cityFound.updateOne({itineraries:[...cityFound.itineraries, newItinerary]})

        let cityFoundUpdated = await City.findById(id)

        res.status(200).json({
            message: "City has been updated",
            city: cityFoundUpdated
        })

    } catch (e) {
        res.status(500).json({ message: e.message });
    }

} 

module.exports = {
    addItinerary,
    getItineraries,
    getItinerary,
    getItineraryByCity
}