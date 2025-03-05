const mongoose = require( "mongoose")

const connectDB = async()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017/posts')
        console.log('Connected to database!');
    } catch (error) {
        console.error(error);
    }
}

module.exports = {connectDB}


