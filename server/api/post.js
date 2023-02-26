import express from "express"
import { getPosts, createPost, deletePost } from "../controller/postController.js"
const router = express.Router()

// GET all posts or one with id
router.get('/', getPosts)
// POST post
router.post('/', createPost)
// DELETE post
router.delete('/', deletePost)

export default router