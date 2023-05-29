const express = require("express")
const mongoose =require("mongoose")
const dotenv = require("dotenv")
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")
const productRoute = require("./routes/product")
const cartRoute = require("./routes/cart")
const orderRoute = require("./routes/order")
const stripeRoute = require("./routes/stripe");
const cors = require("cors")





const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())
app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/products",productRoute);
app.use("/api/carts",cartRoute)
app.use("/api/orders",orderRoute)
app.use("/api/checkout", stripeRoute);






mongoose.connect(process.env.MONGO_URI)
    .then(()=>console.log("connected to db"))
    .catch((e)=>console.log(e))

app.listen(PORT,()=>{
    console.log(`app is running on port ${PORT}`)
})

