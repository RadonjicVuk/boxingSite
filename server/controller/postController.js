import Post from "../model/Post.js"

export const getPosts = async (req, res) => {
    const posts = await Post.find({})
    res.status(200).json(posts)
}

export const createPost = async (req, res) => {
    const newPost = {
        name: req.body.name,
        content: req.body.content
    }
    const post = new Post(newPost)
    await post.save()
    res.redirect('/site');
}