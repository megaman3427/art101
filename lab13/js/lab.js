function fizzBuzzBoom(maxNums, factorObj){
    for (var num=0; num<maxNums; num++) {
        var outputStr = "";
        for (var factor in factorObj) {
            if (num % factor == 0) {
                outputStr += factorObj [factor];
            }
        }

        if (outputStr) {
            outputStr = " - " + outputStr + "!";
        }
        outputToPage(num.toString() + outputStr)
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