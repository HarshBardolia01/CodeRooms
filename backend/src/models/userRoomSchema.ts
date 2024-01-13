import mongoose from "mongoose";

const userRoomSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        required: true
    },

    roomId: {
        type: mongoose.Types.ObjectId,
        required: true 
    }
});

const UserRoomsMaster = mongoose.model("UserRooms", userRoomSchema);
export default UserRoomsMaster;