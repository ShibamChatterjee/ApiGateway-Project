const { log } = require("console");
const express = require("express");
const app = express();
const path= require("path");
const port = 3002;
app.use(express.static(path.join(__dirname,"/public/css")));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.get('/products', (req, res) => {
    res.send("Showing all list of products");
});

app.get('/products/electronics', (req, res) => {
    const data = require("./data.json");
    console.log(data);
    res.render('Electronics.ejs', { data});
});

app.get('/products/clothing', (req, res) => {
    const data = require("./data.json");
    console.log(data);
    res.render('Clothes.ejs', { data});
});


app.listen(port, ()=>{
    console.log("Product service started");
})