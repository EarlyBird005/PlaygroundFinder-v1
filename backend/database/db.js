import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        // const dbObj = await mongoose.connect(process.env.MONGODB_URL);
        const dbObj = await mongoose.connect(process.env.ATLAS_URL);
        console.log("Databse connected");
    } catch (error) {
        console.log("error connecting databse:", error);
        process.exit(1);
    }
}