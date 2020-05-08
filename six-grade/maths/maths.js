// document.getElementById("lol").addEventListener("click", arithmetics());

var arithmeticsTopics = ["<a href = 'subtraction.html'>Subtraction</a>", 
"<a href='multiplication.html'>Multiplication</a>", 
"<a href='division.html'>Division</a>", 
"<a href='exponents.html'>Exponents</a>", 
"<a href='fraction.html'>Fraction</a>",
 "<a href='percentage.html'>Percentage</a>"];

 


function arithmetics(){
    var arithTopics = "<a href='addition.html'>Addition</a>";
    for(var i = 0; i < arithmeticsTopics.length; i++){
         arithTopics += '<br />' + arithmeticsTopics[i];
    }
    document.getElementById("sub-topics").innerHTML = arithTopics;
    document.getElementById("divTopics").style.border= "1px black solid";
}

function proportion(){
    document.getElementById("sub-topics").innerHTML = "Kevin est un piwa"
}

function geometry(){
    document.getElementById("sub-topics").innerHTML = "Kevin est un piwa"
}

function statistics(){
    document.getElementById("sub-topics").innerHTML = "Kevin est un piwa"
}

function problemSolving(){
    document.getElementById("sub-topics").innerHTML = "Kevin est un piwa"
}



var answer = ((Math.PI * 100) - (8 * (32/ Math.sqrt(3)))) / 3 / 3;
answer = Math.round(answer * 100) / 100;
// alert(answer);
function check(){
    var useranswer = document.getElementById("hard-answer").value;
    if(useranswer == answer){
        alert("You got it right");
    }else{
        alert("You got it wrong");
    }
}

function haha(){
   alert("Don't give up, continue trying and you will figure out the correct answer. I cannot tell it to you.");
}