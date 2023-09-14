require('dotenv').config();

const express = require("express")

const router = require("./router/router")

const authRouter = require("./router/authRouter")

const cors = require('cors')

const connectDB = require("./config/db")

const app = express()

connectDB()

app.use(cors())

app.use(express.json())

//Rutas
app.use("/api", router)

app.use("/api", authRouter)

//Levantar servidor
const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log("listening on port", PORT);
})