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

 