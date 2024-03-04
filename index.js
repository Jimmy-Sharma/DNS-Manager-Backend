const express = require("express")
const { connection } = require("./db")
require("dotenv").config()
const cors = require("cors")
let { domainRouter } = require("./routes/domain.routes")

const app = express()
app.use(express.json())
app.use(cors())
app.use("/api", domainRouter)


app.listen(process.env.port, async () => {
    try {
        await connection
        console.log("Connected to DB")
        console.log(`Running on port ${process.env.port}`)
    } catch (error) {
        console.log("Unable to connect")
        console.log(error)
    }
})