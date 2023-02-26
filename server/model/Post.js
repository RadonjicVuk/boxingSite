import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    content:{
        type: String,
        requierd: true
    }
})

const Post = mongoose.model('Post', postSchema)
export default Post