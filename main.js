const express = require('express');
const app = express();
const ejs = require('ejs');
const bodyParser = require('body-parser')
const{ response } = require("express");

app.use(bodyParser.urlencoded({extended : true}));

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views'));
// app.use(express.static('public'));

let data = [];

app.get("/",function(req,res){
    res.render("home");
})

app.get("/about",function(req,res){
    res.render("about");
});

app.get("/contact",function(req,res){
    res.render("contact");
});

app.get("/signup",function(req,res){
    res.render("signup");
});

app.get("/skin",function(req,res){
    res.render("skin");
});


app.get("/dentist",function(req,res){
    res.render("dentist");
});


app.get("/stomach",function(req,res){
    res.render("stomach");
});


app.get("/heart",function(req,res){
    res.render("heart");
});

app.post("/signup", function(req,res){
    console.log(req.body);
    let objData = {
        name : req.body.name,
        gender : req.body.gender,
        emailId : req.body.emailId,
        date : req.body.date,
        password : req.body.password
    }
    data.push(objData);
    res.render("home");
   
}); 

app.post("/", function(req,res){
   
    console.log(req.body);
    for(let i = 0; i<data.length; i++){
        if(data[i].name === req.body.name &&  data[i].password === req.body.password){
            res.render("profile");        
            break;
        }
        else if(i === data.length-1){
        //   res.send(alert('Password/username wrong'));
          res.render("home");
        }
        if(data.length == 0)
        {
            alert('Sign up first');
            res.render("home");
        }
    }
})


app.listen(3000, function(req,res){
    console.log("SERVER IS RUNNING AT PORT 3000");
})