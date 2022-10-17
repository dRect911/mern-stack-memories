import PostMessage from "../models/postMessages.js";

export const GetPosts = async (req, res) =>{
    try {
        const postMessages = await PostMessage.find();
        res.status(201).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const CreatePost = async (req, res) =>{
    const post = req.body;
    const newPost = PostMessage(post);
    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}
