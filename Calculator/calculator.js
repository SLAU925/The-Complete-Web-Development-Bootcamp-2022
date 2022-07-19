const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000, function(){
    console.log("Everything is happening on port 3000! Loading...")
})

app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html");
})
app.post("/", function(req,res){
    var n1 = Number(req.body.n1);
    var n2 = Number(req.body.n2);
    var result = n1 + n2;

    res.send("Thanks for submitting. The answer is "+ result);
})


app.get("/bmiCalculator",function(req,res){
    res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post("/bmiCalculator", function(req,res){
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    var bmi = Math.round(weight/(height*height)*100)/100;

    res.send("Thanks for submitting. Your BMI is "+ bmi);
})
