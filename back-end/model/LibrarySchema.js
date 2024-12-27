import mongoose from "mongoose";
const LibrarySchema  = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true
    },
    author:{
        type:String,
        required:true,
        trim:true
    },
    ison:{
        type:String,
        required:true,
        trim:true
    },
    status:{
        type:String,
        required:true,
        trim:true
    }
});
export const Library = new mongoose.model("Library",LibrarySchema);