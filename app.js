const express = require("express")
const bodyparser = require("body-parser")

const app = express();

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
    LastDateOfEnrollment = t0.toDateString();
   console.log(LastDateOfEnrollment);
 
   t0 = new Date(req.body.t0);
   t0.setDate(t0.getDate() + 9);
    FirstRound = t0.toDateString();
   
    t0 = new Date(req.body.t0);
   t0.setDate(t0.getDate() + 14)
    PayAdmissionFee = t0.toDateString();

  
   t1 = new Date(req.body.t1);
   t1.setDate(t1.getDate() + 9);
    LastDateOfAdmission = t1.toDateString();


 

   t1 = new Date(req.body.t1);
   t1.setDate(t1.getDate() + 14);
    EnrollmentNumberAndVerification = t1.toDateString();


   t1 = new Date(req.body.t1);
   t1.setDate(t1.getDate() + 24);
    DeclearationOfExamSchedule = t1.toDateString();
    res.redirect("/");
  


});




app.listen(8000,function(){

    console.log("server is started on port no 8000")
});