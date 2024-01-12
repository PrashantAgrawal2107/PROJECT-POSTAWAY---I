// import { ApplicationError } from '../../error-handler/applicationError.js';
// import UserModel from '../user/user.model.js'
export default class PostsModel{
    constructor(id,userID,caption,imageUrl){
        this.id = id;
        this.userID = userID;
        this.caption = caption;
        this.imageUrl = imageUrl;
    }
    
    // Create Post
    static add(post){
      posts.id = posts.length + 1;
      posts.push(post);
      return post;
    }

    // Get Post by ID
    static get(postID){
      const post = posts.find((i)=>i.id ==postID);
      return post;

    }
     
    // Get All Posts
    static getAll(){
        return posts;
    }

    // Get Specific User Posts
    static getUserPosts(userID){
        const data = posts.filter((i)=>i.userID==userID);
        return data;
    }

    // Delete a Post
    static delete(postID,userID){
        const postIndex = posts.findIndex(
            (i)=>i.id==postID);
        if(posts[postIndex].userID!=userID){
            return "You can not delete post of other person"
        }
        if(postIndex == -1 ){
            return "Post not Found"; 
        }else{
            posts.splice(postIndex,1);
        }
    }

    // Update a post
    static update(postID,userID,caption,imageUrl){
        const post = posts.find((i)=>i.id ==postID);
        if(!post) return 'Post not Exists';
        if(post.userID!=userID) return 'You are not allowed to update this post.';
        post.caption=caption;
        post.imageUrl=imageUrl;
    }

} 

var posts = [
    new PostsModel(
      1,
      1,
      'Caption for Post 1',
      'https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg'
    ),
    new PostsModel(
      2,
      1,
      'Caption for Post 2',
      'https://m.media-amazon.com/images/I/51xwGSNX-EL._SX356_BO1,204,203,200_.jpg'
    ),
    new PostsModel(
      3,
      2,
      'Caption for Post 3',
      'https://m.media-amazon.com/images/I/31PBdo581fL._SX317_BO1,204,203,200_.jpg'
    )];