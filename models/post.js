const mongoose=require("mongoose")
const postSchema= new mongoose.Schema({

    Description:{
        type:"String",
        required:true,
    },
    Title:
    {
        type:"String",
        require:true,
    },
    UserId:{
        type:"String",
        require:true
    }

})

const Post = mongoose.model("post", postSchema);
module.exports = Post;



