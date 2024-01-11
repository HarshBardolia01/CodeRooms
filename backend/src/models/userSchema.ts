import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
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
        type: String,
        required: [true, "Last Name must be present"]
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

    friendOfCount: {
        type: Number
    },

    avatar: {
        type: String,
        required: [true, "Profile picture should be there"],
        default: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
    },

    coverPhoto: {
        type: String
    },

    about: {
        type: String
    },

    twitterLink: {
        type: String
    },
    
    linkedinLink: {
        type: String
    },

    website: {
        type: String
    }
});

const UserMaster = mongoose.model("User", userSchema);
export default UserMaster;