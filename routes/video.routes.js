import express from "express";
import mongoose from "mongoose";

import User from "../models/user.model.js";
import video from "../models/video.model.js";
import cloudinary from "../config/cloudinary.js";

const router = express.Router();

// upload a video
router.post("/upload", async(req, res) => {
    try {
        
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "something went wrong", message: error.message });
    }
})

export default router;