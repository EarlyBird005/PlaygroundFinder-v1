import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema({
    imageUrl: {
        type: String
    },
    PlayegroundId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Playground"
    }
}, { timestamps: true });

export const ImageModel = mongoose.model("Image", ImageSchema);