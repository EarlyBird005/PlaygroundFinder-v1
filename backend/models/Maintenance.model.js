import mongoose from "mongoose";

const MaintenanceSchema = new mongoose.Schema({
    issue: {
        type: String
    },
    status: {
        type: String,
        enum: ["none", "pending", "in progress", "resolved"]
    },
    PlayegroundId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Playground"
    }
}, { timestamps: true });

export const MaintenanceModel = mongoose.model("Maintenance", MaintenanceSchema);