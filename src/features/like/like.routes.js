// 1. Import express.
import express from 'express';
import LikeController  from './like.controller.js';

// 2. Initialize Express router.
const likeRouter = express.Router();
const likeController = new LikeController();

// All the paths to the controller methods.
// localhost/api/like
likeRouter.get('/:id',likeController.getAllLikes);
likeRouter.get('/toggle/:id',likeController.toggleLikeStatus);

export default likeRouter;