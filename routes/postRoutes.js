const express = require('express');
const {
    createPost, 
    updatePost, 
    getPost,
    deletePost,
}= require("../controller/postController");
const authorization = require("../middleware/authorisation");
const routerPost = express.Router();
routerPost.post('/createPost',authorization,createPost);
routerPost.put("/updatePost",authorization,updatePost
);
routerPost.get("/getPost",authorization,getPost);
//routerPost.put('/put/:id',updateUser)
routerPost.delete("/deletePost",authorization,deletePost)

module.exports = routerPost;
