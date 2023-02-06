const express = require("express");
const connectDB = require("./config/db");
const app = express();
const router = require("./routes/userRoutes")
const routerPost = require("./routes/postRoutes")
const routerlogin= require("./routes/loginRoutes")
connectDB();
app.use(express.json())


const PORT = process.env.PORT || 8000;
app.use('/user',router)
app.use('/post',routerPost)
app.use('/login',routerlogin)
// app.post("/any",(req,res)=>{
// 
app.use((req, res) => res.send("routes not found"));

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});

