
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _ = require("lodash");

const app = express();

mongoose.connect("mongodb://localhost:27017/todolistDB");

const itemSchema = {
  name: {
    type: String,
    required: 1
  }
};

const Item = mongoose.model("Item", itemSchema);



app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const sleep = new Item({name: "sleep"});
const code = new Item({name: "code"});
const study = new Item({name: "study"});
const defaultItems = [sleep,code,study];

const listSchema = {
  name: String,
  items: [itemSchema]
};

const List = mongoose.model("List",listSchema);



app.get("/", function(req, res) {

  Item.find(function(err,items){
    if(items.length === 0){
      Item.insertMany(defaultItems, function(err){
        if(err){
          console.log(err);
        }else{
          console.log("Inserted!");
          mongoose.connection.close();
        };
      });
      res.redirect("/");
    }else{
      res.render("list", {listTitle: "Today", newListItems: items});
    }
  });


});

app.post("/", function(req, res){

  const itemName = req.body.newItem;
  const listName = req.body.list;

  const newItem = new Item({ name: itemName });

  if(listName === "Today"){
    newItem.save();  
    res.redirect("/");
  }else{
    List.findOne({name: listName}, function(err,foundList){
        foundList.items.push(newItem);
        foundList.save();
        res.redirect("/"+listName);
    });
  };

});

app.post("/delete",function(req,res){
  const checkedItemId = (req.body.checked).trim();
  const listName = req.body.listName;
  
  if(listName === "Today"){
    Item.findByIdAndRemove(checkedItemId,function(err){
      if(err){
        console.log(err);
      }else{
        console.log("Removed!");
      }
    });
    res.redirect("/");
  }else{
    List.findOneAndUpdate({name: listName},{ $pull: {items: {_id: checkedItemId}}}, function(err,foundList){
      if(!err){
        res.redirect("/"+listName);
      }
    });
  };


});

app.get("/:customListName",function(req,res){
  const customListName = _.capitalize(req.params.customListName);

  List.findOne({name: customListName},function(err,foundList){
    if(!err){
      if(!foundList){
        const list = new List({
          name: customListName,
          items: defaultItems
        });
        list.save();
        res.redirect("/"+list.name);
      }
      else{
        res.render("list",{listTitle: foundList.name, newListItems: foundList.items});
      }
    };
  });
  
});

app.get("/about", function(req, res){
  res.render("about");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
