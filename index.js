const express = require('express')
const app = express()

//mongdb pass: wtfxeQpkoqLh9p5m
const mongoose = require(`mongoose`)
const dotenv = require(`dotenv`)
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")
const productRoute = require("./routes/product")
const cartRoute = require("./routes/cart")
const orderRoute = require("./routes/order")
const stripeRoute = require("./routes/stripe")
const cors = require(`cors`)

dotenv.config()

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log(`DB connected`))
    .catch( err => console.log(err) );

app.use(cors())
app.use(express.json()) // This enables ure app to process json object posted in hte req.body
app.use("/api/users", userRoute)
app.use("/api/auth", authRoute)
app.use("/api/products", productRoute)
app.use("/api/carts", cartRoute)
app.use("/api/orders", orderRoute)
app.use("/api/checkout", stripeRoute)

app.listen(process.env.port, () => {
    console.log('Backend Server is running')
})