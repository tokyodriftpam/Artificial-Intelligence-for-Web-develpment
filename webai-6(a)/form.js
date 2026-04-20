$(document).ready(function(){

let params=new URLSearchParams(window.location.search);

let eventName=params.get("event");

$("#event").val(eventName);


$("#submitBtn").click(function(){

let name=$("#name").val();
let email=$("#email").val();
let mobile=$("#mobile").val();

let emailPattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

let valid=true;

$("input").css("border","1px solid black");

$("#message").text("");


if(name==""){
$("#name").css("border","2px solid red");
valid=false;
}

if(!email.match(emailPattern)){
$("#email").css("border","2px solid red");
valid=false;
}

if(!/^\d{10,}$/.test(mobile)){
$("#mobile").css("border","2px solid red");
valid=false;
}

if(!valid){

$("#message")
.text("Please enter valid details")
.css("color","red");

return;

}


$("#message")
.text("Registration Successful for "+name)
.css("color","green");

$("#submitBtn")
.prop("disabled",true)
.text("Registered");

});


$("#resetBtn").click(function(){

$("input").css("border","1px solid black");

$("#message").text("");

});

});