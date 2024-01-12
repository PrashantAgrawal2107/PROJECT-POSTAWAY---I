// 1. Import express.
import express from 'express';
import  CommentController  from './comment.controller.js';

// 2. Initialize Express router.
const commentRouter = express.Router();
const commentController = new CommentController();

// All the paths to the controller methods.
// localhost/api/comment
commentRouter.get('/:id',commentController.getComments);
commentRouter.post('/:id',commentController.addComment);
commentRouter.delete('/:id',commentController.deleteComment);
commentRouter.put('/:id',commentController.updateComment);

export default commentRouter;