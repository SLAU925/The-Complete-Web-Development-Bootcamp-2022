const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const _ = require("lodash");

const app = express();

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/wikiDB");

const articleSchema = {
    title: String,
    content: String
};

const Article = mongoose.model("Article", articleSchema);

// const itm1 = new Article({
//     "title" : "REST",
//     "content" : "REST is short for REpresentational State Transfer. IIt's an architectural style for designing APIs."
// });


// const itm2 = new Article({
//     "title" : "API",
//     "content" : "API stands for Application Programming Interface. It is a set of subroutine definitions, communication protocols, and tools for building software. In general terms, it is a set of clearly defined methods of communication among various components. A good API makes it easier to develop a computer program by providing all the building blocks, which are then put together by the programmer."
// });


// const itm3 = new Article({
//     "title" : "Bootstrap",
//     "content" : "This is a framework developed by Twitter that contains pre-made front-end templates for web design"
// });


// const itm4 = new Article({
//     "title" : "DOM",
//     "content" : "The Document Object Model is like an API for interacting with our HTML"
// });


// const itm5 = new Article({
//     "title" : "Jack Bauer",
//     "content" : "Jack Bauer once stepped into quicksand. The quicksand couldn't escape and nearly drowned.",
//     "__v" : 0
// });


// const ary = [itm1,itm2,itm3,itm4,itm5];

// Article.insertMany(ary,function(err){
//     if(!err){
//         console.log("Added");
//     }
// });


app.route("/articles")
    .get(function(req,res){
        Article.find(function(err,foundArticles){
            if(!err){
                res.send(foundArticles);
            }else{
            res.send(err); 
            };
        });
    })

    .post(function(req,res){
        const newArticle = new Article({
            title: req.body.title,
            content: req.body.content
        });

        newArticle.save(function(err){
            if(!err){
                res.send("Saved!");
            }else{
                res.send(err);
            }
        });
    })

    .delete(function(req,res){
        Article.deleteMany(function(err){
            if(!err){
                res.send("Deleted!");
            }else{
                res.send(err);
            };
        });
    });

/////////////Specific Article///////////////////////////
app.route("/articles/:articleTitle")
    .get(function(req,res){
        Article.findOne({title: req.params.articleTitle},function(err,foundArticle){
            if(!err){
                res.send(foundArticle);
            }else{
                res.send(err);
            };
        });
    })

    .put(function(req,res){
        Article.findOneAndUpdate(
            {title: req.params.articleTitle},
            {title: req.body.title, content: req.body.content},
            {new: true, overwrite:true},
            function(err){
                if(!err){
                    res.send("Updated");
                }else{
                    res.send(err);
                };
            });
    })

    .patch(function(req,res){
        Article.findOneAndUpdate(
        {title: req.params.articleTitle},
        { $set: req.body},
        function(err){
            if(!err){
                res.send("Updated");
            }else{
                res.send(err);
            };
        });
    })

    .delete(function(req,res){
        Article.deleteOne({title: req.params.articleTitle},
            function(err){
            if(!err){
                res.send("Deleted");
            }
        });
    });

app.listen(3000,function(){
    console.log("Server started on port 3000");
});
