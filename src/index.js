require('dotenv').config();

// const cities = require("./utils/cities")

const express = require("express")

const router = require("./router/router")

const cors = require('cors')

const connectDB = require("./config/db")

const app = express()

connectDB()

app.use(cors())

app.use(express.json())


app.use("/api", router)

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log("listening on port", PORT);
})