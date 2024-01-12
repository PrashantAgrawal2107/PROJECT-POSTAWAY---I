// 1. Import express.
import express from 'express';
import  PostsController  from './posts.controller.js';
import {upload} from '../../middlewares/fileupload.middleware.js';

// 2. Initialize Express router.
const postsRouter = express.Router();
const postsController = new PostsController();

// All the paths to the controller methods.
// localhost/api/posts
postsRouter.get('/all', postsController.getAllPosts);
postsRouter.post('/', upload.single('imageUrl'), postsController.addPost);
postsRouter.get('/:id', postsController.getOnePost);
postsRouter.get('/',postsController.getOneUserPosts);
postsRouter.delete('/:id',postsController.deletePost);
postsRouter.put('/:id',postsController.updatePost);

export default postsRouter;