import LikeModel from "./like.model.js";

export default class LikeController{
    getAllLikes(req,res){
        const postID = req.params.id;   
        const likes = LikeModel.getLikes(postID);
        return res.status(200).send(likes);
    }

    toggleLikeStatus(req,res){
        const postID = req.params.id;
        const userID = req.userID;
        const result = LikeModel.toggleLike(postID,userID);
        return res.status(200).send(result);
    }
}