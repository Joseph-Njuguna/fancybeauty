var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send("Heloo Joe")
});

app.listen(8888, function(){
    console.log("hello Joe")
})
