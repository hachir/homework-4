var crystal = {
    blue: {
        name:"blue",
        value: 0
    },
    green: {
        name:"green",
        value: 0
    },
    red: {
        name:"red",
        value: 0
    },
    yellow:
    {
        name:"yellow",
        value: 0
    }
};
var currentscore =0;
var targetscore  =0;

var wincount     =0;
var losscount    =0;


var getRandom = function(min,max){
    return Math.floor(Math.random() *  (max - min +1 )) + min;
}
function startGame(){
    currentscore =0;
    targetscore=getRandom(19,120);
    
    crystal.blue.value    = getRandom (1,12);
    crystal.red.value     = getRandom (1,12);
    crystal.green.value   = getRandom (1,12);
    crystal.yellow.value  = getRandom (1,12);

    $("#yourScore").text(currentscore);
    $("#targetScore").text(targetscore);

    console.log("........................")
    console.log("target score:"+ targetscore);
    console.log("Blue:" + crystal.blue.value + "| Red: " + crystal.red.value + "| Green: " + crystal.green.value + "| Yelow: " + crystal.yellow.value );   
    console.log(".........................")


}
function addvalues (crystal){

   currentscore = currentscore + crystal.value;
   
   $("#yourScore").html(currentscore);
  
   checkwin();
  
   console.log("your score: " + currentscore);
    
}
function checkwin(){

 if(currentscore > targetscore){
  alert("sorry. you lost!");
  console.log ("you lost");
    
    losscount++;
    $("#losscount").html(losscount);
    setTimeout(startGame, 1000)
}
 else if (currentscore == targetscore){
     alert("congratualions! you won!");
     console.log("you won!")
    
     wincount++;
     $("#wincount").html(wincount);
       setTimeout(startGame, 1000)
 }
}

startGame();

$("#blue").click(function(){
    
    addvalues(crystal.blue)
});
$("#red").click(function(){
    
    addvalues(crystal.red)
});
$("#green").click(function(){
    
    addvalues(crystal.green)
});
$("#yellow").click(function(){
    
    addvalues(crystal.yellow)
});