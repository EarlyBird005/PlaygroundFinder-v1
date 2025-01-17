import mongoose from "mongoose";

const PlaygroundSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: [2, "Playground name must be at least 2 characters long."]
    },
    description: {
        type: String
    },
    address: {
        type: String,
        required: true,
    },
    zipcode: {
        type: Number
    },
    city: {
        type: String
    },
    timing: {
        type: String
    },
    images: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Image"
        }
    ],
    facilities: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Facilitie"
        }
    ],
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Review"
        }
    ],
    avgRating: {
        type: Number
    }
}, { timestamps: true });

export const PlaygroundModel = mongoose.model("Playground", PlaygroundSchema);