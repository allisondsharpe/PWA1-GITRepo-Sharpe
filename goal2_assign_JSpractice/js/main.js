/*
Name: Allison Sharpe //My full name
Date: 12-3-14 //Date started
Assignment: JS Practice v2 //Assignment information
 */

(function() { //Self-executing function

    console.log('------ Goal2: Assignment: JavaScript Practice ----------'); //Displays the goal for this assignment to the console

    console.log("1. avg of an array of numbers"); //Displays the message "1. avg of an array of numbers" to the console

    var total = [1, 2, 3, 4, 5]; //Array index variables

    function avgNumbers(total) { //Executes function for the average of numbers
        var avgNumbers = total[0] + total[1] + total[2] + total[3] + total[4]; //Arrays of average numbers

        console.log("avg number = " + avgNumbers); //Displays the total average to the console
        return avgNumbers; //Returns to function
    } //Closing curly brace for function

    //--------------------------------------------------------
    console.log("2. concat first and last name"); //Displays the message "2. concat first and last name" to the console

    function fullName(Allison, Sharpe) { //Executes function for full name
        console.log(("Allison, Sharpe")); //Displays full name to the console
        return fullName; //Returns to function

    } //Closing curly brace for function

    //--------------------------------------------------------
    console.log("3. word count"); //Displays the message "3. word count" to the console
    var ipsum = "this is test text that is being used as input to a function"; //Variable for the word count

    function wordCount(ipsum) { //Executes function for the word count
    } //Closing curly brace for function

    function totalWordCount(ipsum) { //Executes another function that counts words and returns variables
        console.log(wordCount(ipsum)); //Displays the word count to the console
        return totalWordCount; //Returns variables to function
    } //Closing curly brace for function


