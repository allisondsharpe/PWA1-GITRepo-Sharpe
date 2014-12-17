/*
Name: Allison Sharpe
Date: 12-17-14
Assignment: Analyze! Objects.Person
 */

(function(){ //Self-executing function

    window.Person = Person; //Enables "person object" for main.js file
    Person.jobs = ["Programmer", "Chef", "Mechanic", "Musician"]; //Displays various jobs to web page
    Person.actions = ["Browsing the web", "Cooking", "Eating", "Sleeping"]; //Displays various actions to web page

    function Person(name, row) { //Executes function for person
        console.log("Person created: ", name); //Displays the message "Person created:" as well as the name of the person to the console

        this.name = name; //Constructor for the name of the person
        this.action = Person.actions[Math.floor(Math.random() * Person.actions.length)]; //Constructor and math formulas for the actions
        this.job = Person.jobs[Math.floor(Math.random() * Person.jobs.length)]; //Constructor and math formulas for the jobs
        this.row = row; //Constructor for the row

        var id = document.getElementById("r" + this.row + "c3"); //Displays "this.row" to the DOM
        id.innerHTML = this.action; //Defines "this.action"

    } //Closing curly brace for function

    Person.prototype.update = function() { //Executes function for the prototype for person
        if(Math.floor(Math.random()<.01)) { //If statement and math formulas for change in person's actions

            var i = Math.floor(Math.random() * Person.actions.length); //Math formula that determines the length of a person's actions
            this.action = Person.actions[i]; //Defines "this.action"

            var id = document.getElementById("r" + this.row + "c3"); //Displays "this.row" to the DOM
            id.innerHTML = this.action; //Displays "this.action" to the DOM
        } //Closing curly brace for if statement

    }; //Closing curly brace for prototype for person

})(); //Closing curly brace and parenthesis for self-executing function