import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [2, "First name must be at least 2 characters long."]
        },
        lastname: {
            type: String,
            // required: true,
            minlength: [2, "Last name must be at least 2 characters long."]
        }
    },
    email: {
        type: String,
        required: [true, "Email is required."],
        unique: true 
    },
    password: {
        type: String,
        required: [true, "Password is required."],
        select: false
    },
    mobileNumber: {
        type: String,
        // required: [true, "Mobile number is required."],
        minlength: [10, "Mobile number must have 10 digits."]
        // unique: true
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user',
    },
    refreshToken: {
        type: String
    }
}, { timestamps: true });

userSchema.methods.generateAuthToken = function () {
    return jwt.sign({_id: this._id, email: this.email}, process.env.JWT_SECRET);
};
// userSchema.methods.generateAuthToken = function () { // access token (short lived token)
//     return jwt.sign({ _id: this._id, email: this.email }, process.env.JWT_ACCESS_SECRET, { expiresIn: "1d" });
// };
// userSchema.methods.generateRefreshToken = function () { // reffresh token (long lived token)
//     return jwt.sign({ _id: this._id, email: this.email }, process.env.JWT_REFRESH_SECRET, { expiresIn: "30d" });
// };

userSchema.methods.getEmail = function () {
    return this.email;
}

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};
userSchema.methods.passCheck = async function (password) {
    return await bcrypt.compare(password, this.password);
};

userSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 8);
};

export const UserModel = mongoose.model("User", userSchema);