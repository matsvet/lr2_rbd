const express = require("express")
const app = express()
const cors = require("cors")
const PORT = process.env.PORT || 8000
require("./DBConnection/conn")
const serialRoute = require("./Routers/serialRoute")

app.use(cors())
app.use(express.json())
app.use(serialRoute)

app.listen(PORT, () => {
    console.log("Server is running on Port: " + PORT)
});
