const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://santi_dev:<password>@cluster0.eldtxm6.mongodb.net/?retryWrites=true&w=majority';
const mongoDB = async() => {
    await mongoose.connect(mongoURI, () =>{
        console.log("connected")
    })
}

module.exports = mongoDB;