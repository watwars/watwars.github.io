var express = require("express");
var app = express();
var request = require("request");

app.set("view engine", "ejs");



app.get("/", function(req, res){
   
    res.render("form")
});


app.get("/stats", function(req, res){
    var country = req.query.country.toLowerCase();
    console.log(country)
    var url = ("https://api.covid19api.com/total/country/" + country)
    request(url, function (error, response, body) {
    var parsedData = JSON.parse(body);
    var length = parsedData.length - 1;
    var confirmed = (parsedData[length]["Confirmed"]);
    var death = (parsedData[length]["Deaths"]);
    var recovered = (parsedData[length]["Recovered"]);
    var active = (parsedData[length]["Active"]);
    var date = (parsedData[length]["Date"]);
    res.render("home", {confirmed: confirmed, country:country, death: death, recovered: recovered, active: active, date:date});
});
});

app.listen(3000, function(){
    console.log("CORONAVIRUS SERVER STARTED")
});