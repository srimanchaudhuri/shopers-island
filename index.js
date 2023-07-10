const express = require('express')
const app = express()
//mongdb pass: wtfxeQpkoqLh9p5m
const mongoose = require(`mongoose`)
const dotenv = require(`dotenv`)
const userRoute = require("./routes/user")

dotenv.config()

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log(`DB connected`))
    .catch( err => console.log(err) );

app.use(express.json()) // This enables ure app to process json object posted in hte req.body
app.use("/api/user", userRoute)

app.listen(process.env.port, () => {
    console.log('Backend Server is running')
})