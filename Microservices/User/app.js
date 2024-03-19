const express = require("express");
const app = express();
const path= require("path");
const port = 3001;
app.use(express.static(path.join(__dirname,"/public/css")));
app.listen(port,() => {
    console.log(`app is listing on port ${port}`);
});

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views")); // it will search views folder only in index.js's current directory which is EJSdir to access the code from out side

app.get("/users",(req,res)=>{
    res.send("Showing the list of all users")
})

app.get("/users/:username",(req,res)=>{
    let {username}=req.params;
    const instadata = require("./data.json");
    const data = instadata[username];
    res.render("show.ejs",{data});
});

