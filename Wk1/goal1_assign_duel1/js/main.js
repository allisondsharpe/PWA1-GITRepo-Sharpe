/**
 * Name: Allison Sharpe //My name
 * Date: 11-26-14 //The date I began working on this assignment

 Assignment 1 //The assignment number
 Part 1/3 of series //The first part of the series
*/

//Executes function for code
(function(){

 console.log("FIGHT!!!"); //Displays the message "FIGHT!!!" on the console

 //Player name
 var playerOneName = "Jason Brody"; //The name of player one
 var playerTwoName = "Vaas Montenegro"; //The name of player two

 //Player damage
 var player1Damage = 50; //The total amount of damage that will be inflicted upon player one
 var player2Damage = 50; //The total amount of damage that will be inflicted upon player two

 //Player health
 var playerOneHealth = 100; //The total amount of health that player one starts off with
 var playerTwoHealth = 100; //The total amount of health that player two starts off with

 //Initiates round
 var round = 0; //The variable for each round

 function fight(){ //Executes a function for the fight app
  alert(playerOneName+":"+playerOneHealth+"  *START*  "+playerTwoName+":"+playerTwoHealth); //This alerts the user that the fight will now start
  for (var i = 0; i < 10; i++) //The "for loop" formula for the fight app
  {
   //Random formula is - Math.floor(Math.random() * (max - min) + min);
   var minDamage1 = player1Damage * .5; //The minimum amount of damage that will be inflicted upon player one
   var minDamage2 = player2Damage * .5; //The minimum amount of damage that will be inflicted upon player two
   var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1); //The Math.floor and Math.random formulas for player one
   var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2); //The Math.floor and Math.random formulas for player two

   //Inflicts damage
   playerOneHealth-=f1; //The inflicted damage for player one
   playerTwoHealth-=f2; //The inflicted damage for player two

   console.log(playerOneName+": "+playerOneHealth + " " + playerTwoName+":"+playerTwoHealth); //Displays the inflicted damage to the console

   //Checks for victor
   var result = winnerCheck(); //The variable for the winner of the fight
   console.log(result); //Displays the result to the console
   if (result==="no winner") //The message "no winner" will be displayed with each round if both players still have health left
   {
    round++; //The "for loop" for each round
    alert(playerOneName+":"+playerOneHealth+"  *ROUND "+round+" OVER"+"*  "+playerTwoName+":"+playerTwoHealth); //This will alert the user for each round

   } else{ //Else/if statement
    alert(result); //This will alert the user of each result
    break; //Break in function
   };

  };
 };

  function winnerCheck(){ //Executes function for a final winner
   var result="no winner"; //Displays the message "no winner" for each round
   if (playerOneHealth<1 && playerTwoHealth<1) //If/else statement for player one and player two
   {
    result = "You Both Die"; //If both players lose all health in the same round, the message "You Both Die" will be displayed
   } else if(playerOneHealth<1){ //Else/if statement
    result =playerTwoName+" WINS!!!" //If player one loses all health before player two, player two's name as well as the message "WINS!!!" will be displayed
   } else if (playerTwoHealth<1) //Else/if statement
   {
    result = playerOneName+" WINS!!!" //If player two loses all health before player one, player one's name as well as the message "WINS!!!" will be displayed
   };
   return result; //Returns function
  };

  /*******  The program gets started below *******/
  fight(); //Executes the app on the web page

 })();



