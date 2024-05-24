x=121;

function sortingHat(str){
    let length = str.length;
    const numOfHouses = 4;
    let remainder = length % numOfHouses;
    if(remainder == 0) {
      return "snarflepuff";
    } else if (remainder == 1){
  
      return "Glynethpaltrow";
    } else if (remainder == 2) {
      return "SltheringSnake";
    } else {
      return "Paramour";
    }
  }
  const house = sortingHat("Revon Hollis");
  console.log(house);
  
  var myButton = document.getElementById("button");
  myButton.addEventListener("click", function() {
    var name = document.getElementById("input").value;
    var house = sortingHat(name);
    newText = "<p>The Sorting Hat has sorted you into " + house + "</p>";
    document.getElementById("output").innerHTML = newText;
  })