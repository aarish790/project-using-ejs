const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
var app = express();


app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended : true}));

app.set('view engine', 'ejs');
var _ = require('lodash');
var fir = "Welcome to my first project build with EJS template ";
var sec = "Passionate about web development and machine learning";
var thr = "Contact me at my github account";
var datas = [];
var a;
var b;



app.get("/",function(req,res){


	// datas.forEach(function(data){
	//  	a = data.data1;
	// 	b = data.data2; 

	// });
	
	res.render("home",{p1:fir, entries : datas});




});


app.get("/about",function(req,res){

	res.render("about",{p2:sec});

});


app.get('/users/:userID', function (req, res) {
    var a = req.params.userID;

    var b = _.lowerCase(a);

    datas.forEach(function(data){

    	if (b == _.lowerCase(data.data1)){

  	 		

  	 		
    	    res.render("post",{one:data.data1, two:data.data2});
            

        }


    });
  
 
});


// datas.forEach(function(data){

//     app.get("/users/data.data1", function(req,res) {
//     	 res.render("post",{one:data.data1, two:data.data2});
//     });
// });


app.get("/contact",function(req,res){

	res.render("contact",{p3:thr});

});

app.get("/compose",function(req,res){

	res.render("compose");



});

app.post("/compose",function(req,res){

	var data1;
    var data2;
    

    // function truncate(input) {
    //     if (input.length > 100)
    //          return input.substring(0,99) + '...';
    //     else
    //          return input;
    // };
    
	// const truncate = (input) => input.length > 100 ? `${input.substring(0, 99)}...` : input;
    // var c = truncate(req.body.area);
	 

	var com = {data1 : req.body.line, data2 : req.body.area};

	datas.push(com);

	// console.log(data);


	res.redirect("/");
	res.render("post");
});




app.listen(process.env.PORT || 3000,function(req,res){
	console.log("Server is running on 3000 port")
});


