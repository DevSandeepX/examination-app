import express from "express"
import "dotenv/config"
import connectDb from "./config/connectDb.js"
import adminRouter from "./routes/adminRoute.js"

const app = express()
const port = process.env.PORT || 4000


app.get("/", (req, res) => {
    res.send("<h2>Server is live</h2>")
})

// middleware
app.use(express.json({}))

app.use("/api/admin/", adminRouter)

connectDb()


app.listen(port, () => {
    console.log(`App is Live http://localhost:${port}`)
})