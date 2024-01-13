import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    code: {
        type: String,
        required: true,
        unique: true
    },

    topic: {
        type: String
    }
});

const RoomsMaster = mongoose.model("Rooms", roomSchema);
export default RoomsMaster;