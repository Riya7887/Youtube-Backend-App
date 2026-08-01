import express from "express";


const router = express.Router();

router.post("/singnup" , (req, res) => {
    res.send("User singup route");
})

export default router;