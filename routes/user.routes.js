import express from "express";
import bcrypt from "bcrypt";
import mongoose from "mongoose";
import user from "../models/user.models.js";



const router = express.Router();

router.post("/singup" , async(req, res) => {
    try {
        const hashcode = await bcrypt.hash(req.body.password , 10);
        
    } catch (error) {
        
    }
})

export default router;