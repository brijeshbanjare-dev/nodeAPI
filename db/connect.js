const mongoose= require("mongoose");
const { options } = require("../routes/products");

const connectDB= (uri)=>{
    // console.log("Connected DB");
    return mongoose.connect(uri);
};

module.exports = connectDB;