import express from "express"
import "dotenv/config"
import connectDb from "./config/connectDb.js"


const app = express()
const port = process.env.PORT || 4000


app.get("/", (req, res) => {
    res.send("<h2>Server is live</h2>")
})


connectDb()


app.listen(port, () => {
    console.log(`App is Live http://localhost:${port}`)
})