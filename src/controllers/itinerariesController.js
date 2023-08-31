const City = require("../models/City");
const Itinerary = require("../models/Itinerary");

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
        const { id } = req.query;

        // Verificar si se proporcionó un ID válido
        if (!id) {
            return res.status(400).json({ message: "ID de ciudad no proporcionado en la consulta." });
        }

        // Utilizar el ID proporcionado para filtrar los itinerarios por ciudad
        let itinerariesEncontrados = await Itinerary.find({ _ciudad: id });

        res.status(200).json({itinerariesEncontrados});
    } catch (err) {
        res.status(500).json({ message: err.message });
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

        await cityFound.updateOne({ itineraries: [...cityFound.itineraries, newItinerary] })

        let cityFoundUpdated = await City.findById(id)

        res.status(200).json({
            message: "City has been updated",
            city: cityFoundUpdated
        })

    } catch (e) {
        res.status(500).json({ message: e.message });
    }

}

const updateItinerary = async (req, res) => {
    try {
        let newData = {
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            precio: req.body.precio,
            duracion: req.body.duracion,
            likes: req.body.likes,
            hashtags: req.body.hashtags
        }

        const { id } = req.params;
        await Itinerary.findByIdAndUpdate(id, newData);

        res.status(200).json({
            "message": "Itinerary has been updated",
            newData
        });

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const deleteItinerary = async (req, res) => {


    try {
        let { id } = req.query


        const deletedItinerary = await Itinerary.deleteOne({ _id: id })

        res.status(201).json({
            "message": "Itinerary has been deleted",
            "deletedItinerary": deletedItinerary
        })
    } catch (err) {
        res.status(500).json({ message: err })
    }

}

module.exports = {
    addItinerary,
    getItineraries,
    getItinerary,
    getItineraryByCity,
    updateItinerary,
    deleteItinerary
}