import CommentModel from "./comment.model.js";

export default class CommentController{
    
    getComments(req,res){
        const postID = req.params.id;
        const comments = CommentModel.get(postID);
        return res.status(200).send(comments);
    }
    
    addComment(req,res){
        const postID = req.params.id;
        const userID = req.userID;
        const content = req.body;
        const result = CommentModel.add(postID,userID,content);
        return res.status(200).send(result);
    }

    deleteComment(req,res){
        const postID = req.params.id;
        const userID = req.userID;
        const error = CommentModel.delete(postID,userID);
        if(error){
             return res.status(400).send(error);
        }
        return res.status(200).send('Comment has been deleted successfully');
    }

    updateComment(req,res){
        const postID = req.params.id;
        const userID = req.userID;
        const content = req.body;
        const error = CommentModel.update(postID,userID,content);
        if(error){
            return res.status(400).send(error);
        }
        return res.status(200).send('Comment has been updated successfully');
    }
}