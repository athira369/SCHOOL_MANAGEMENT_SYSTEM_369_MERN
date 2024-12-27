import mongoose from "mongoose";
const AnnouncementSchema = new mongoose.Schema({
    content:{
        type:String,
        required:true,
        trim:true,
    },

});
export const Announcement = mongoose.model("Announcement",AnnouncementSchema);