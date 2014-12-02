/*
Name: Allison Sharpe
Date: 12-1-14
Assignment 2
 */

// Create privatized scope using a self-executing function
(function(){ //Executes function for the code
	
	//Variable initialization (DO NOT FIX ANY OF THE BELOW VAR's)
	var resultsDIV = document.getElementById("results"), //Variable for the results
		searchInput = document.forms[0].search, //Variable for the search input
		currentSearch = '' //Initializes search input
	;
	
	//Validates search query
	var validate == function(query){ //Executes function for the validation variable
		
		//Trim whitespace from start and end of search query
		while(query.charAt(0) = " "){ //While loop for valid character length
			query = query.substring(1, query.length); //Initializes while loop
		};
		while(query.charAt(query.length-1) === ""){ //While loop for invalid character length
			query = query.substring(0, query.length-1); //Initializes while loop
		;
		
		//Check search length, must have 3 characters
		if(query.length < 3){ //If statement that enables Javascript to display the following alert message
			alert("Your search query is too small, try again."); //Alerts the user that the search query should contain more than two characters
			
			// (DO NOT FIX THE LINE DIRECTLY BELOW)
			searchInput.focus(); //Enables the search input to be displayed
			return; //Returns function
		};
		
		search(query); //Enables the search query to be displayed
	};
	
	//Finds search matches
	var search = function(query) //Executes function for the search variable
		
		//Split the user's search query string into an array
		var queryArray = query.join(" "); //Variable for the search query array
		
		//Array to store matched results from database.js
		var results = []; //Variable for the results in the database.js

		//Loop through each index of db array
		for(var i=0, j=db.length; i<j; i++){ //The "for loop" for the array
		
			//Each db[i] is a single video item, each title ends with a pipe "|"
			//Save a lowercase variable of the video title
			var dbTitleEnd = db[i].indexOf('|'); //Variable for the end of the title
			var dbitem = db[i].tolowercase().substring(0, dbTitleEnd); //Initializing the lowercase variable
			
			//Loop through the user's search query words
			//Save a lowercase variable of the search keyword
			for(var ii=0, jj=queryArray.length; ii<jj; ii++){ //The "for loop" for search query words
				var qitem = queryArray[ii].tolowercase(); //Variable for the query array
				
				//Is the keyword anywhere in the video title?
				//If a match is found, push full db[i] into results array
				var compare = dbitem.indexOf(qitem); //Variable for the keyword found in video title
				if(compare !== -1){ //If statement for keyword in video title
					results.push(db[i]); //Pushes results into array if match was found
				};
			;
		;
		
		results.sort(); //Enables the results to be displayed
		
		//Check that matches were found, and run output functions
		if(results.length = 0){ //If statement for the search input results
			noMatch(); //This will enable the message "No Results found" to display in the following function
		}else{ //Else statement for the search input results
			showMatches(results); //If there are matches to the search query, this will enable them to appear
		};
	};
	
	//Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)
	var noMatch = function(){ //Executes function for the search input results to appear
		var html = ''+ //HTML variable for the following messages
			'<p>No Results found.</p>'+ //This will enable the page to display a message that says "No Results found"
			'<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>'//This is the innerHTML for the HTML
		;
		resultsDIV.innerHTML = html; //Enables the HTML and innerHTML to be displayed
	};
	
	//Put matches into page as paragraphs with anchors
	var showMatches = function(results){ //Executes function for the following items to be displayed
		
		// THE NEXT 4 LINES ARE CORRECT.
		var html = '<p>Results</p>', //Variable for the HTML of the search items
			title, //Enables the title of the items to be displayed
			url //Enables the url of the items to be displayed
		;
		
		//Loop through all the results search() function
		for(var i=0, j=results.length; i<j; i++){ //The "for loop" that enables the browser to loop through all possible results
		
			//Title of video ends with pipe
			//Pull the title's string using index numbers
			titleEnd = results[i].indexOf('|'); //Enables the item's title to end with a pipe
			title = results[i].subString(0, titleEnd); //Enables the browser to display the title
			
			//Pull the video url after the title
			url = results[i].substring(results[i].indexOf('|')+1, results[i].length); //Enables the browser to display the url
			
			//Make the video link - THE NEXT LINE IS CORRECT.
			html += '<p><a href=' + url + '>' + title + '</a></p>'; //Enables the browser to display the video link
		};
		resultsDIV.innerHTML = html; //THIS LINE IS CORRECT.
	};
	
	// The onsubmit event will be reviewed in upcoming Course Material.
	// THE LINE DIRECTLY BELOW IS CORRECT
	document.forms[0].onsubmit = function(){ //This will execute Javascript by submitting this form
		var query = searchInput.value; //Variable for the Search Query
		validate(query); //This validates the search query for the code

        //Return false is needed for most events - this will be reviewed in upcoming course material
        //THE LINE DIRECTLY BELOW IS CORRECT
		return false; //Returns the function
	;

})();