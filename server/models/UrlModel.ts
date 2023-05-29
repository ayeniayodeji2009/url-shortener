import mongoose from "mongoose";

// Instantiate a mongoose schema
const URLSchema = new mongoose.Schema({
    urlCode: String,
    longUrl: String,
    shortUrl: String,
    date: {
        type: String,
        default: Date.now
    }
})


// Create a model from schema and export it
export default mongoose.model("Url", URLSchema)
