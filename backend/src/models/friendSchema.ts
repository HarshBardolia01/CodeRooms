import mongoose from "mongoose";

const friendSchema = new mongoose.Schema({
    user1Id: {
        type: mongoose.Types.ObjectId,
        required: true
    },

    user2Id: {
        type: mongoose.Types.ObjectId,
        required: true
    },
});

const FriendsMaster = mongoose.model("Friends", friendSchema);
export default FriendsMaster;