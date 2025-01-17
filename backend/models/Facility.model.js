import mongoose from "mongoose";

const FacilitySchema = new mongoose.Schema({
    name: {
        type: String
    },
    PlayegroundId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Playground"
    }
}, { timestamps: true });

export const FacilityModel = mongoose.model("Facility", FacilitySchema);