
/*
   lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page

   Requirements: jQuery must be loaded for this script to work.

   Author: Revon Hollis
   Date: 05-11-2024
*/

$("#challenge").append("<button id='button-challenge'>Challenge</button>");

$("button-challenge").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#challenge").toggleClass("special");
});

$("#problems").append("<button id='button-problems'>Problems</button>");

$("button-problems").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#problems").toggleClass("special");
});

$("#results").append("<button id='button-results'>Results</button>");

$("button-results").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#results").toggleClass("special");
});