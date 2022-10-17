import express from "express";
import { GetPosts, CreatePost } from '../controllers/posts.js'


const router = express.Router();

router.get('/', GetPosts);
router.post('/', CreatePost);

export default router;