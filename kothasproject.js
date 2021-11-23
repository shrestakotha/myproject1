var r = require("readline-sync");
var username=r.question("may i have your name?");
console.log("welcome "+username+" To How Well You Know Shresta");
var score =0;
var userAnswer=["what is my full name?","where am i from?","which clg do i study in?","what is my birth month?","do you think i like cofee?","what is my favorite colour?"]
var originalAnswer=["kotha shresta","zaheerabad","mrec","august","yes","blue"]
var highest =[
  {
  name : "shresta",
  total: 6,
}, 
{
  name :"mom" ,
  total : 5 ,}
]
function play(userAnswer,originalAnswer){
  if (userAnswer==originalAnswer){
    console.log("correct");
    score=score+1;
    
  }else{
    console.log("oops you got me wrong "+username+ " !");
    console.log("the correct answer is "+originalAnswer);
  }
}
for (var i=0;i<=5;i++){
  play(r.question(userAnswer[i]),originalAnswer[i]);
}

if (score >= highest.total){
  console.log("you know  very well about me "+username);
  console.log("your score is "+score);
}else {
  console.log("hey your score is "+score)
}
console.log("thank you for playing :-)");