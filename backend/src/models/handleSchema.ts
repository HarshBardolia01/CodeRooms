import mongoose from "mongoose";

const handleSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true,
        unique: true
    },

    codeforces: {
        type: String,
        required: true
    },

    codechef: {
        type: String
    },

    leetcode: {
        type: String
    },

    atcoder: {
        type: String
    },

    hackerrank: {
        type: String
    },

    hackerearth: {
        type: String
    },

    geeksForGeeks: {
        type: String
    },

    codingNinjas: {
        type: String
    },

    newtonSchool : {
        type: String
    },
});

const handleMaster = mongoose.model("Handle", handleSchema);
export default handleMaster;