import express from "express";
const validUrl = require("valid-url");
const shortid = require("shortid");


//Creating express route handler
const router = express.Router();


// Import the Url database model
import Url from "../models/UrlModel";


// The API base Url endpoint
const baseUrl = "http://localhost:4000";

router.post('/shorten', async (req, res) => {
    const { longUrl } = req.body; //destructuring the longUrl from req.body.longUrl
    
    // Check base url if valid using the validUrl.isUri method
    if (!validUrl.isUri(baseUrl)) {
        return res.status(401).json("Invalid base url");
    }

    // if valid, we create the url code
    const urlCode = shortid.generate();

    // Check long url if valid using the validUrl.isUri method
    if (validUrl.isUri(longUrl)) {
        try {
            // Check if the long url already exists in the database
            let url = await Url.findOne({ longUrl });

            // If the long url already exists in the database, we return it
            if (url) {
                res.json(url);
            } else {
                // If the long url does not exist in the database, we create it
                const shortUrl = baseUrl + "/" + urlCode;

                // Create a new Url object
                url = new Url({
                    longUrl,
                    shortUrl,
                    urlCode,
                    date: new Date()
                });

                // Save the new Url object to the database
                await url.save();

                // Return the new Url object
                res.json(url);
            }
        }
        catch (err) {
            console.error(err);
            res.status(500).json("Server error");
        }
    } else {
        // If the long url is not valid, we return an error
        res.status(401).json("Invalid long url");
    }
});
    

export default router;