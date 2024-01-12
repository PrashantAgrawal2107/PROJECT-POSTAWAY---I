
export default class CommentModel{
    constructor(id,userID,postID,content){
        this.id = id;
        this.userID = userID;
        this.postID = postID;
        this.content = content;
    }

    static get(postID){
        const data = comments.filter((i)=>i.postID==postID);
        return data;
    }

    static add(postID , userID , content){
        const comment = new CommentModel(comments.length+1,userID,postID,content);
        comments.push(comment);
        return comment;
    }

    static delete(postID , userID){
        const commentIndex = comments.findIndex((i)=>i.postID==postID && i.userID==userID);
        if(commentIndex==-1) return 'Comment not exists or you are not allowed to delete this comment';
        comments.splice(commentIndex,1);
    }

    static update(postID , userID , content){
        const comment = comments.find((i)=>i.postID==postID && i.userID==userID);
        if(!comment) return 'Comment not exists or You are not allowed to update this comment';
        comment.content=content;
    }
}

var comments = [
    new CommentModel(1,1,2,'Congratulations'),
    new CommentModel(2,2,2,'Happy Journey'),
    new CommentModel(3,2,1,'Interesting')
]