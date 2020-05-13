// document.getElementById("lol").addEventListener("click", arithmetics());

var arithmeticsTopics = [
    "<a href ='arithmetics/subtraction.html'>Subtraction</a>", 
    "<a href='arithmetics/multiplication.html'>Multiplication</a>", 
    "<a href='arithmetics/division.html'>Division</a>", 
    "<a href='arithmetics/exponents.html'>Exponents</a>", 
    "<a href='arithmetics/fraction.html'>Fraction</a>",
    "<a href='arithmetics/percentage.html'>Percentage</a>"
];

var geometryTopics=[];

var proportionTopics=[

];

var statisticsTopics=[];

var problemSolvingTopics=[];
 


function arithmetics(){
    var arithTopics = "<a href='arithmetics/addition.html'>Addition</a>";
    for(var i = 0; i < arithmeticsTopics.length; i++){
         arithTopics += '<br />' + arithmeticsTopics[i];
    }
    document.getElementById("sub-topics").innerHTML = arithTopics;
    document.getElementById("divTopics").style.border= "1px black solid";
}

function proportion(){
    var propTopics = "<a href='proportion/unitConversion.html'>Unit Conversion</a>";
    for(var i = 0; i < proportionTopics.length; i++){
         propTopics += '<br />' + proportionTopics[i];
    }
    document.getElementById("sub-topics").innerHTML = propTopics;
    document.getElementById("divTopics").style.border= "1px black solid";
}

function geometry(){
    var geoTopics = "<a href='geometry/perimeter.html'>Perimeter</a>";
    for(var i = 0; i < geometryTopics.length; i++){
         geoTopics += '<br />' + geometryTopics[i];
    }
    document.getElementById("sub-topics").innerHTML = geoTopics;
    document.getElementById("divTopics").style.border= "1px black solid";
}

function statistics(){
    var statTopics = "<a href='statistics/mean.html'>Mean</a>";
    for(var i = 0; i < statisticsTopics.length; i++){
         statTopics += '<br />' + statisticsTopics[i];
    }
    document.getElementById("sub-topics").innerHTML = statTopics;
    document.getElementById("divTopics").style.border= "1px black solid";
}
function problemSolving(){
    var probTopics = "<a href='probSolving/consumer.html'>Consumer Problems</a>";
    for(var i = 0; i < problemSolvingTopics.length; i++){
         probTopics += '<br />' + probSolvingTopics[i];
    }
    document.getElementById("sub-topics").innerHTML = probTopics;
    document.getElementById("divTopics").style.border= "1px black solid";
}



