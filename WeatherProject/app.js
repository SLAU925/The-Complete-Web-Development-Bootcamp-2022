const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
})

app.post("/",function(req,res){
    const query = req.body.cityName;
    const apiKey = req.body.ID;
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+apiKey+"&units="+unit;

    https.get(url,function(response){

        response.on("data",function(data){
            const weatherData = JSON.parse(data);
            var temp = weatherData.main.temp;
            var description = weatherData.weather[0].description;
            var location = weatherData.name;
            var icon_url = "http://openweathermap.org/img/wn/"+weatherData.weather[0].icon+"@2x.png";

            res.set("Content-Type","text/html");
            res.write("<img src='"+icon_url+"'>");
            res.write("The current weather is " + description);
            res.write("<h1>The temperature in " + location + " is " + temp + " degree celcius.</h1>");
            res.send();
        })
    })
})

app.listen(3000,function(){
    console.log("Server is ready on port 3000...");
})

