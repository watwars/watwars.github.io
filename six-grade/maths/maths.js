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
