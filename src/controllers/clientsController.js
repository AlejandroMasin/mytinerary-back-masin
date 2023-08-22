const Client = require("../models/Client")


const getClients = async (req, res) => {

    try {
        let Clients = await Client.find()

        res.json(
            Clients
        )
    } catch (err) {
        res.status(500).json({message: err.message})
    }

}

const getClient = async (req, res) => {

    try {
        const { id } = req.params

        let clienteEncontrado = await Client.findById(id)

        res.status(200).json(clienteEncontrado)

    } catch (err) {
        res.status(500).json({message: err})
    }

}

const addClient = async (req, res) => {

    try {
        let payload = req.body

        let clientCreado = await Client.create(payload)
    
        res.status(201).json({
            "message": "client has been added",
            "client": clientCreado
        })
    } catch (err) {
        res.status(500).json({message: err})
    }
}

const updateClient = async (req, res) => {
    try {
        let newData = {
            name: req.body.name,
            lastName: req.body.lastName,
            age: req.body.age
        }

        const { id } = req.params;
        await Client.findByIdAndUpdate(id, newData);

        res.status(200).json({
            "message": "Client has been updated",
            newData
        });

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}


const deleteClient = async (req, res) => {


    try {
        let {id} = req.query

        await Client.deleteOne( {_id: id} )

        res.status(201).json({
            "message": "client has been deleted",
        })
    } catch (err) {
        res.status(500).json({message: err})
    }

}

module.exports = {
    getClients,
    getClient,
    addClient,
    updateClient,
    deleteClient
}