// script.js

// Function to output text to the page
function outputToPage(str) {
    var outputEl = document.getElementById("output");
    var newDiv = document.createElement("div");
    newDiv.textContent = str;
    outputEl.appendChild(newDiv);
}

// Function to run the FizzBuzzBoom logic
function runFizzBuzzBoom() {
    document.getElementById("output").innerHTML = ""; // Clear previous output

    for (let i = 1; i <= 120; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            outputToPage("FizzBuzz");
        } else if (i % 3 == 0) {
            outputToPage("Fizz");
        } else if (i % 5 == 0) {
            outputToPage("Buzz");
        } else if (i % 7 == 0) {
            outputToPage("Boom");
        } else {
            outputToPage(i.toString());
        }
    }
}

// Add event listener to the button
document.getElementById("runButton").addEventListener("click", runFizzBuzzBoom);