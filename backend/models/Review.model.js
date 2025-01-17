import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
    rating: {
        type: Number
    },
    comment: {
        type: String
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    PlayegroundId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Playground"
    }
}, { timestamps: true });

export const ReviewModel = mongoose.model("Review", ReviewSchema);