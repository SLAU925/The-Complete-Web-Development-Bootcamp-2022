const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const ejs = require("ejs");
const app = express();

let items = ["sleep", "code", "study", "eat"];
let workItems = [];

app.use(express.static("public"));
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended: true}));

let title;

app.get("/",function(req,res){
    
    let day = date.getDay();
    res.render("list", { listTitle: day, newListItem: items});
})

app.post("/",function(req,res){
    let item = req.body.newItem;
    console.log(req.body);
    if(req.body.list === "Work"){
        workItems.push(item);
        res.redirect("/work");
    }else{
        items.push(item);
        res.redirect("/");
    }
})

app.get("/work",function(req,res){
    title = "Work";
    res.render("list",{ listTitle: title, newListItem: workItems});
})

app.get("/about",function(req,res){
    res.render("about");
})

app.listen(3000,function(){
    console.log("Server is running on port 3000...");
})