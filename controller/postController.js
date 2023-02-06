const postSchema = require("../models/post");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
//const { use } = require("../routes/postRoutes");
const saltRounds=10;
const createPost = async (req, res) => {
    try {
      const { Description,Title } = req.body;
      
        const createpost = new postSchema({
                Description,
                Title,
                UserId:req.id
            });
            let response = await createpost.save();
            console.log('response of the data is: ',response);
            res.json({
              message: "getting all the user",
              data: response,
            });
         
    } catch (err) {
      res.json({
        message: err.message,
      });
    }
  };

  //console.log("##############33")

  const updatePost = async (req, res) => {
    //console.log("###################3")
    try {
      let id = req.body.id;
      //console.log("id is ***********,",id);
      const { Description,Title } = req.body;
      let post = await postSchema.findOne({_id:id});
      post.Description = Description ? Description : post.Description;
      post.Title = Title ? Title : post.Title;
      
      let response = await post.save();
      res.json({
        message: "update User",
        response,
        
      });
    } catch (err) {
      res.json({
        message: err.message,
      });
    }
  };

  const getPost = async (req, res) => {
    try {
      let id = req.body.id;
      let post = await postSchema.find({_id:id});
      let response=await post.save()
      res.json({
        message: "the post",
        post,
      });
    } catch (err) {
      res.json({
        message: err.message,
      });
    }
  };

  const deletePost= async(req,res)=>{
    try{
        let id =req.body.id;
        let post= await postSchema.find({id:id}).delete;
        res.json({
            message: "deleted"
        });
    }
    catch(err){
        res.json({
            message:err.message,
        })
    }
    }
  
  



  module.exports={createPost,updatePost,getPost,deletePost};
