/**
 * Name: Allison Sharpe
 * Date: 12-9-14

 Assignment: Duel #3
 Part 3/3 of series
*/

(function(){ //Executes function for code

    console.log("FIGHT!"); //Displays the message "FIGHT!!!" on the console

    var playerOne_txt = document.getElementById("jb").querySelector("p"); //Variable for player one
    var playerTwo_txt = document.getElementById("vm").querySelector("p"); //Variable for player two
    var round_txt = document.querySelector("h5"); //Variable for the text for each round
    var button = document.getElementById("fight_btn"); //Variable for the fight button

    button.addEventListener("click", fight, false); //Sets up click event


    var players = [ //Opening array bracket
        { //Opening curly brace for player one
            name: "Jason Brody", //Player one's name
            damage: 20, //Player one's damage
            health: 100 //Player one's health
        }, //Closing curly brace for player one
        {
            name: "Vaas Montenegro", //Player two's name
            damage: 20, //Player two's damage
            health: 100 //Player two's health
        }]; //Closing curly brace for player two and array bracket for player variables

    var round = 1; //Variable for each round

    round_txt.innerHTML ="Click FIGHT button to Start!"; //Displays the message "Click FIGHT button to Start!"
    playerOne_txt.innerHTML = players[0].name + ":  " + players[0].health; //Displays player one's name and health to page
    playerTwo_txt.innerHTML = players[1].name + ":  " + players[1].health; //Displays player two's name and health to page

    function fight() { //Executes function for fight

   












