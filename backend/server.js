const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const twilio = require('twilio'); 
const otpGenerator = require('otp-generator');
const authRoutes = require("./routes/authRoutes");
const PostRoute = require("./routes/itemRoute");
const otpRoute = require('./routes/otpRoute');
const cookieParser = require("cookie-parser");
app.use(express.json());
app.use(cookieParser());
mongoose.connect("mongodb+srv://BharathK:BharathK@cluster0.7lek3af.mongodb.net/?retryWrites=true&w=majority", {
  useUnifiedTopology: true,
  useNewUrlParser: true
}).then(() => {
  console.log("Connected to MongoDB");
}).catch((error) => {
  console.log("An error occurred while connecting to MongoDB:", error);
});


app.use(cors({
    origin: ["http://localhost:3000"],
    
    credentials: true,
  }

));

const port = 5000;



app.use("/api/auth", authRoutes);
app.use("/api/item",PostRoute);
// app.use("/api/item/delete",PostRoute)
app.use("/api/otp",otpRoute);
app.listen(port , ()=> {
    console.log(`server started on port ${port}`);
});
