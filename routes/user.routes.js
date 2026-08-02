import express from "express";
import bcrypt from "bcrypt";
import mongoose from "mongoose";
import user from "../models/user.models.js";



const router = express.Router();

router.post("/singup" , async(req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password , 10);
        const uploadImage = await cloudinary.uploader.uplload(
            req.files.logo.tempFilePath
        )
        const newUser = new User({
            _id: new mongoose.Types.ObjectId(),
            channelName: req.body.channelName,
            email: req.body.email,
            password: hashedPassword,
            phone: req.body.phone,
            logoUrl: uploadImage.secure.url,
            logoId:uploadImage.public_id
        })

        let user = await newUser.save();
        res.status(201).json({
            user

        })

    } catch (error) {
        
    }
})

export default router;