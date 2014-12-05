/**
 * Name: Allison Sharpe
 * Date: 12-2-14

 Assignment: Duel v2
 Part 2/3 of series
*/

(function(){ //Executes function for code

    console.log("FIGHT!!!"); //Displays the message "FIGHT!!!" on the console

    var playerOne = ["Jason Brody", 20, 100]; //Array for player one
    var playerTwo = ["Vaas Montenegro", 20, 100]; //Array for player two

    var round = 1; //Variable for each round

    function fight() { //Executes function for fight

        alert(playerOne[0]+":"+playerOne[2]+" *START* "+playerTwo[0]+":"+playerTwo[2]); //Alerts the user that the fight has started


        for(var i=0; i<10; i++) { //"The "for loop" for the variables
            var minDamage1 = playerOne[1] * .5; //Variable for player one's minimum damage amount
            var minDamage2 = playerTwo[1] * .5; //Variable for player two's minimum damage amount
            var f1 = Math.floor(Math.random() * (playerOne[1] - minDamage1) + minDamage1); //The Math.floor and Math.random formulas for player one
            var f2 = Math.floor(Math.random() * (playerTwo[1] - minDamage2) + minDamage2); //The Math.floor and Math.random formulas for player two

            playerOne[2] -= f1; //
            playerTwo[2] -= f2; //
            //Closing curly brace for "for loop"
            console.log(playerOne[2] + " " + playerTwo[2]); //Displays the players damage to the console

            var result = winnerCheck(); //Variable for the winner check
            console.log(result); //Displays the result to the console

            if(result === "No winner") //If statement for each round that no one wins
            { //Opening curly brace for if statement
                round++; //Loops each round until there is a winner
                alert(playerOne[0]+":"+playerOne[2]+" *Round "+round+" Over* "+playerTwo[0]+":"+playerTwo[2]); //Alerts the user for the end of each round
            } else { //Else statement for either when one player wins, or when both players die

                alert(result); //Alerts the user of the final result
                break; //Break for if/else statement

            } //Closing curly brace for if/else function

        } //Closing curly brace for "for loop"

    } //Closing curly brace for fight function













