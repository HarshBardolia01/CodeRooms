import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
    handle: {
        type: String,
        unique: true,
        required: [true, "Codeforces Handle is Required!"]
    },

    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        validate: validator.isEmail
    },

    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [6, "Password Must Be Atleast 6 characters"]
    },

    firstName: {
        type: String,
        required: [true, "First Name must be present"]
    },

    lastName: {
        type: String
    },

    city: {
        type: String
    },

    country: {
        type: String
    },

    organization: {
        type: String
    },

    rating: {
        type: Number
    },

    maxRating: {
        type: Number
    },

    friendOfCount: {
        type: Number
    },

    avatar: {
        type: String
    },

    titlePhoto: {
        type: String
    },

    rank: {
        type: String
    },

    maxRank: {
        type: String
    },
});

const UserMaster = mongoose.model("User", userSchema);
export default UserMaster;