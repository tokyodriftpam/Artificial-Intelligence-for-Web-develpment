$(document).ready(function(){

$(".toggleBtn").click(function(){

let eventBox=$(this).parent();

eventBox.find(".details").slideToggle();

if($(this).text()=="Show Details"){
$(this).text("Hide Details");
}
else{
$(this).text("Show Details");
}

$(".event").css("background","white");

eventBox.css("background","#dfefff");

let title=eventBox.find("h3").text();

eventBox.find("h3").css("color","red");

alert("Event Selected: "+title);

});


$(".register").click(function(){

let title=$(this).closest(".event").find("h3").text();

window.location.href="register.html?event="+encodeURIComponent(title);

});

});