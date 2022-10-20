import mongoose from "mongoose";
import PostMessage from "../models/postMessages.js";

// get all posts request
export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find();
        res.status(201).json(postMessages);
    } catch (error) {
        console.log('error while getting posts');
        res.status(409).json({ message: error.message });
    }
}

// create post request
export const createPost = async (req, res) => {
    const post = req.body;
    const newPost = PostMessage(post);

    try {
        await newPost.save();
        res.status(201).json(newPost);
        console.log('created a new post');
    } catch (error) {
        console.log('error while creating a new post');
        res.status(409).json({ message: error.message });
    }
}

// post update request
export const updatePost = async (req, res) => {
    const { id: _id } = req.params;
    const post = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');

    try {
        const updatedPost = await PostMessage.findByIdAndUpdate(_id, { ...post, _id }, { new: true });
        res.json(updatedPost);
        console.log(`updated post on id:${_id}`);
    } catch (error) {
        console.log('error while updating a post');
        res.json({ message: error.message });
    }
}

// post delete request
export const deletePost = async (req, res) => {
    const { id: _id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');

    try {
        await PostMessage.findByIdAndRemove(_id);
        console.log(`deleted post on id:${_id}`);
        res.json({ message: "Post successfully deleted"});
    } catch (error) {
        console.log('error while deleting a post');
        res.json({ message: error.message });
    }
}

// Post like handler
export const likePost = async (req, res) => {
    const { id: _id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');

    try {
        // request here
        const post = await PostMessage.findById(_id);
        const updatedPost = await PostMessage.findByIdAndUpdate(_id, { likeCount: post.likeCount + 1 }, { new: true });
        res.json(updatedPost);
        console.log(updatedPost);
        console.log(`liked post on id:${_id}`);
    } catch (error) {
        console.log('error while liking a post');
        res.json({ message: error.message });
    }
}
