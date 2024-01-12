import PostsModel from "./posts.model.js";

export default class PostsController{

    getAllPosts(req,res){
        const posts = PostsModel.getAll();
        res.status(200).send(posts);
    }

    addPost(req, res){
        const caption = req.body;
        const userID = req.userID;
        const newPost = {
            userID,
            caption,
            imageUrl: req.file.filename,
        };
        const createdRecord=PostsModel.add(newPost);
        res.status(201).send(createdRecord);
    }


    getOnePost(req,res){
        const postID = req.params.id;
        const post = PostsModel.get(postID);
        if(!post){
            res.status(404).send('Post not found');
        } else{
            return res.status(200).send(post);
        }
    }

    getOneUserPosts(req,res){
        const userID = req.userID;
        const posts = PostsModel.getUserPosts(userID);
        return res.status(200).send(posts);
    }

    deletePost(req,res){
        const userID = req.userID;
        const postID = req.params.id;
        const error = PostsModel.delete(postID,userID);
        if(error){
            res.status(400).send(error);
        }else{
            res.status(200).send('Post is deleted');
        }
    }

    updatePost(req,res){
        const userID = req.userID;
        const postID = req.params.id;
        const caption = req.body;
        const imageUrl = req.file.filename;
        const error = PostsModel.update(postID,userID,caption,imageUrl);
        if(error){
            res.status(400).send(error);
        }else{
            res.status(200).send('Post is updated');
        }
    }

   
}