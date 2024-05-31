for (let i=1; i <=120; i++) {
        
            if ((i % 3   == 0) && (i % 5 == 0)) {
                console.log ("FizzBuzz");
            }
        

             else if (i % 3 == 0) {
                console.log("Fizz");
            }
            
            else if (i % 5 == 0) {
                console.log("Buzz");
            }
            else if (i % 7 == 0) {
                console.log("Boom");
            }

            else {
                console.log(i);
            }
}

function reportError(str) {
    outputEl.innerHTML = "<div class='error'>" + str + "</div>";

}

document.getElementById("submit").addEventListener("click", function() {
    var max = document.getElementById("max").ariaValueMax;
    console.log("max:", max)
    if (! max) {
        reportError("You must provide a maximum");
    } else {
        document.getElementById("output").innerHTML = ""; // Clear previous output
        fizzBuzzBoom(parseInt(max), {3: "Fizz", 5: "Buzz"});
    }
});