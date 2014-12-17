/*
Name: Allison Sharpe
Date: 12-17-14
Assignment: Analyze! Objects.Person
 */

(function(){ //Self-executing function

    var names = ["Allison", "Sharon", "Chris", "Caleb", "Genna"]; //Variable for names
    var people = []; //Variable which enables three random names to be selected
    var numOfPeople = 3; //Variable for the number of people shown each time
    var interval; //Variable that enables the interval

    for (var i = 0; i < numOfPeople; i++) { //The "for loop" for the "numOfPeople" variable
        var personIndex = Math.floor(Math.random() * names.length); //Math formulas for the person index
        var person = new Person(names[personIndex], i + 1); //Constructor for the person index

        populateHTML(person.name, "r" + (i + 1) + "c1"); //Displays person's name to the web page
        populateHTML(person.job, "r" + (i + 1) + "c2"); //Displays person's job to the web page

        people.push(person); //Pushes the array for person index
        names.splice(personIndex, 1); //Splices names for person index

        interval = setInterval(runUpdate, 1000/30); //Enables the interval to change actions 30 times a second

    } //Closing curly brace for "for loop"

 