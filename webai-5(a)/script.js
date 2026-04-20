let time = 10;

let timer = setInterval(function(){

document.getElementById("timer").innerText="Time Left: "+time;

if(time==5){
document.getElementById("warning").innerText="Only 5 seconds remaining!";
}

if(time<=0){
clearInterval(timer);
submitQuiz();
}

time--;

},1000);


function submitQuiz(){

clearInterval(timer);

let answers={
q1:"c",
q2:"a",
q3:"a",
q4:"a",
q5:"a"
};

let score=0;

let form=document.getElementById("quizForm");

for(let q in answers){

let selected=form[q].value;

if(selected==answers[q]){
score++;
}

}

document.getElementById("result").innerText="Final Score: "+score+"/5";

let inputs=document.querySelectorAll("input");

inputs.forEach(function(i){
i.disabled=true;
});

}