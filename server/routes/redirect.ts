import express from 'express';
import mongoose from 'mongoose';
const router = express.Router();
const Url = '../models/UrlModel/Url';


router.get('/:code', async (req, res) => {
    try {
        //find a document match to the code in req.params.code
        const url = await Url.findOne({
            urlCode: req.params.code
        })
        if (url) {
            // When valid we perform a redirect
            return res.redirect(url.longUrl)
        } else {
            // else return a not found 404 status
            return res.status(404).json('No URL Found')
        }
    }
    // exception handler
    catch (err) {
        console.error(err)
        res.status(500).json('Server Error')
    }
})


export default router