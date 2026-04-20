let eventDate = new Date("March 20, 2026 12:00:00").getTime();

let timer = setInterval(function(){

let now = new Date().getTime();

let distance = eventDate - now;

let days = Math.floor(distance / (1000*60*60*24));

let hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));

let minutes = Math.floor((distance % (1000*60*60)) / (1000*60));

let seconds = Math.floor((distance % (1000*60)) / 1000);

document.getElementById("countdown").innerHTML=
days+"d "+hours+"h "+minutes+"m "+seconds+"s";

if(distance<=0){

clearInterval(timer);

document.getElementById("countdown").innerHTML="";

document.getElementById("message").innerHTML="Registration Closed";

}

},1000);