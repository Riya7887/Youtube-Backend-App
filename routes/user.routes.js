import express from "express";


const router = express.Router();

router.post("/singup" , (req, res) => {
    res.send("User singup route");
})

export default router;