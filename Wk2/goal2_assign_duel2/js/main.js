/**
 * Name: Allison Sharpe
 * Date: 12-2-14

 Assignment: Duel v2
 Part 2/3 of series
*/

//Executes function for code
(function(){

 console.log("FIGHT!!!"); //Displays the message "FIGHT!!!" on the console

 var playerOne = ["Jason Brody", 20, 100];
 var playerTwo = ["Vaas Montenegro", 20, 100];

 var round = 1;

 function fight(){
 console.log("FIGHT!!!");

 alert(playerOne[0] +":"+ playerOne[2] +" *START* "+playerTwo[0] +":"+ playerTwo[2]);

 for(var i=0; i<10; i++); //"The "for loop" for the variables

 var minDamage1 = playerOne[1] * .5;
 var minDamage2 = playerTwo[1] * .5;
 var f1 = Math.floor(Math.random()*playerOne[1]-minDamage1)+minDamage1;
 var f2 = Math.floor(Math.random()*playerTwo[1]-minDamage2)+minDamage2;

 playerOne[2]-=f1;
 playerTwo[2]-=f2;

 console.log(playerOne[2]+" "+playerTwp[2]);

 var result = winnerCheck();
 console.log(result);

 if(result === "No winner")
 {
 round++;
 alert(playerOne[0]+":"+playerOne[2]+" *Round "+round+" Over+"*  +playerTwo[0]+":"+playerTwo[2]);
 }else{

  alert(result);
  break;

 }

 function winnerCheck() {
  var results = "No winner";

  if (playerOne[2] < 1 && playerTwo[2] < 1) {
   result = "You both die";
  } else if (playerOne[2] < 1) {
   result = playerTwo[0] + "WINS!!!";
  } else if (playerTwo[2] < 1) {
   result = playerOne[0] + "WINS!!!";

  }

  //Program gets started below
  fight();
 })();









