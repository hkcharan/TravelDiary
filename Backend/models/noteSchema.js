import mongoose from "mongoose"

const noteSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
})

export const Note = mongoose.model("Note", noteSchema);