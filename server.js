import express from "express";
import swagger from 'swagger-ui-express';
import cors from 'cors';

import userRouter from './src/features/user/user.routes.js';
import postsRouter from './src/features/posts/posts.routes.js';
import likeRouter from './src/features/like/like.routes.js';
import commentRouter from './src/features/comment/comment.routes.js';
import jwtAuth from "./src/middlewares/jwt.middleware.js";
import apiDocs from './swagger.json' assert {type : 'json'};
import loggerMiddleware from './src/middlewares/logger.middleware.js';
import { ApplicationError } from "./src/error-handler/applicationError.js";

const server = express();

// CORS Policy Cofiguration
server.use(cors());

server.use(express.json());
server.use("/api-docs", swagger.serve , swagger.setup(apiDocs));
server.use(loggerMiddleware);

// localhost:3000/api/users
server.use("/api/users", userRouter);

// localhost:3000/api/posts
server.use("/api/posts",jwtAuth ,postsRouter);

// localhost:3000/api/like
server.use("/api/like",jwtAuth ,likeRouter);

// localhost:3000/api/comment
server.use("/api/comment",jwtAuth ,commentRouter);

// localhost:3000
server.use('/',(req,res)=>{
   return res.send('Welcome to the POSTWAY !');
})

// Error Handler Middleware -->>  Placed at the end of other Middlewares -->>
server.use((err,req,res,next)=>{
    console.log(err);
    if(err instanceof ApplicationError){
        res.status(err.code).send(err.message);
    }
    // Server Errors -->>
    res.status(500).send('Something went wrong. Please try later.');

})

// Middleware to handle 404 requests (Resource not Found)
server.use((req,res)=>{
    res.status(404).send("API not Found. Please check our documentation for more information at localhost:3000/api-docs");
})


server.listen(3000,()=>{
    console.log("Server is running at 3000");
});