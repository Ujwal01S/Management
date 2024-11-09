import mongoose from "mongoose";




const connectDB = async() => {
    try {
        const connec = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connect to Server ${connec.connection.host}`.bgBlue);
    } catch (error) {
        console.log(`Error in MongoDB ${error}`.bgRed);
    }
};


export default connectDB;