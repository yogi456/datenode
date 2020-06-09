const express = require("express")
const bodyparser = require("body-parser")

const app = express();

var dateFormat = require('dateformat');
var now = new Date();

var FirstRound="";
var PayAdmissionFee="";
var LastDateOfAdmission="";
var EnrollmentNumberAndVerification="";
var DeclearationOfExamSchedule="";
var LastDateOfEnrollment="";

app.set("view engine","ejs")

app.use(bodyparser.urlencoded({extended : false}));



app.get("/",function(req,res){

   
    var today = new Date()
  
   var x = today.getMonth()
   console.log(x)
   var day ;

   res.render("list",{first:FirstRound,trr:LastDateOfEnrollment,payadfee:PayAdmissionFee,lastdate:LastDateOfAdmission,enroll:EnrollmentNumberAndVerification,at2:DeclearationOfExamSchedule})

});

app.post("/",function(req,res){
   

   t0 = new Date(req.body.t0);
   t0.setDate(t0.getDate() + 19);
    var date1 = t0.toDateString();
     LastDateOfEnrollment = dateFormat(date1,"dd/mm/yyyy");
   
 
   t0 = new Date(req.body.t0);
   t0.setDate(t0.getDate() + 9);
   
    var date2 = t0.toDateString();
    FirstRound= dateFormat(date2,"dd/mm/yyyy");
   
    t0 = new Date(req.body.t0);
   t0.setDate(t0.getDate() + 14)
    var date3 = t0.toDateString();
    PayAdmissionFee = dateFormat(date3,"dd/mm/yyyy");

  
   t1 = new Date(req.body.t1);
   t1.setDate(t1.getDate() + 9);
    var date4 = t1.toDateString();
    LastDateOfAdmission = dateFormat(date4,"dd/mm/yyyy");



 

   t1 = new Date(req.body.t1);
   t1.setDate(t1.getDate() + 14);
    var date5 = t1.toDateString();
    EnrollmentNumberAndVerification= dateFormat(date5,"dd/mm/yyyy");


   t1 = new Date(req.body.t1);
   t1.setDate(t1.getDate() + 24);
    var date6 = t1.toDateString();
    DeclearationOfExamSchedule = dateFormat(date6,"dd/mm/yyyy");
    res.redirect("/");
  


});




app.listen(8000,function(){

    console.log("server is started on port no 8000")
});