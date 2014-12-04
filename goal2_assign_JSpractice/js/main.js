/*
Name: Allison Sharpe
Date: 12-3-14
Assignment: JS Practice v2
 */

// self-executing function
(function() {

    console.log('------ Goal2: Assignment: JavaScript Practice ----------');

    console.log("1. avg of an array of numbers");

    function avgNumbers(avgNum) {
        var avgNumbers = avgNum[0] + avgNum[1] + avgNum[2] + avgNum[3] + avgNum[4];

        console.log('avg number = ', avgNumbers([1, 2, 3, 4, 5]));
        return avgNumbers;
    }

    //--------------------------------------------------------
    console.log("2. concat first and last name");

    function fullName(Allison, Sharpe) {
        console.log(('Allison, Sharpe'));
        return fullName;

    }

    //--------------------------------------------------------
    console.log("3. word count");
    var ipsum = "this is test text that is being used as input to a function";

    function wordCount(ipsum) {
    }

    function totalWordCount(ipsum) {
        console.log(wordCount(ipsum));
    }

    //--------------------------------------------------------
    console.log("4. sentence char count");

    function charCount(ipsum) {

        console.log(charCount(ipsum));
        return charCount;
    }

    //--------------------------------------------------------
    console.log("5. how many vowels in a word");

    function vowelsInWord(Javascript) {

        console.log(vowelsInWord('JavaScript'));
        return vowelsInWord;
    }








