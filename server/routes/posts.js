import express from "express";

const router = express.Router();

router.get('/', (req, res) => {
    res.send('shit works!');
});

export default router;