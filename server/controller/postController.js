import Post from "../model/Post.js"

export const getPosts = async (req, res) => {
    if(req.query.id){
        const post = await Post.find({"_id": req.query.id})
        res.status(200).json(post)
    }else{
        const posts = await Post.find({})
        res.status(200).json(posts)
    }
}

export const createPost = async (req, res) => {
    const newPost = {
        name: req.body.name,
        content: req.body.content
    }
    const post = new Post(newPost)
    await post.save()
    res.status(201).redirect('/site')
}

export const deletePost = async (req, res) => {
    const post = await Post.findByIdAndDelete({"_id": req.query.id})
    console.log(1);
    if(post){
        res.status(200).redirect('/site') 
    }else{
        res.status(404).json({"error": "Post not found"})
    }
}