const City = require("../models/City")


const getCities = async (req, res) => {

    try {
        let Cities = await City.find()

        res.json(
            Cities
        )
    } catch (err) {
        res.status(500).json({ message: err.message })
    }

}

const getCity = async (req, res) => {

    try {
        const { id } = req.params

        let ciudadEncontrada = await City.findById(id)

        res.status(200).json(ciudadEncontrada)

    } catch (err) {
        res.status(500).json({ message: err })
    }

}

const addCity = async (req, res) => {

    try {
        let payload = req.body

        let cityCreada = await City.create(payload)

        res.status(201).json({
            "message": "City has been added",
            "client": cityCreada
        })
    } catch (err) {
        res.status(500).json({ message: err })
    }
}

const updateCity = async (req, res) => {
    try {
        let newData = {
            ciudad: req.body.ciudad,
            imagen: req.body.imagen,
            pais: req.body.pais
        }

        const { id } = req.params;
        await City.findByIdAndUpdate(id, newData);

        res.status(200).json({
            "message": "City has been updated",
            newData
        });

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}


const deleteCity = async (req, res) => {


    try {
        let { id } = req.query


        const deletedCity = await City.deleteOne({ _id: id })

        res.status(201).json({
            "message": "City has been deleted",
            "deletedCity": deletedCity
        })
    } catch (err) {
        res.status(500).json({ message: err })
    }

}
// preguntar por findByIdAndDelete

module.exports = {
    getCities,
    getCity,
    addCity,
    updateCity,
    deleteCity
}