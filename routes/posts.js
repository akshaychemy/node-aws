import express from 'express';
import Post from '../models/Post.js';
import auth from '../middleware/auth.js';


const router = express.Router();

//create post 
router.post('/',auth,async(req,res)=>{
    const {title,content} = req.body;

    try{
        const newPost = new Post({
            title,
            content,
            author: req.user.id
        });

        const post = await newPost.save();
        res.status(201).json(post);

    }catch(err){
        res.status(500).json({message:err.message});
    }
});


// get all the posts

router.get('/', async (req, res)=>{
    try{
        const posts = await Post.find().populate('author',['username','email']);
        res.status(200).json(posts);
    }catch(err){
        res.status(500).json({message:err.message});
    }
})

export default router