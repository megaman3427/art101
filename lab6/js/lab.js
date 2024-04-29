// index.js - purpose and description here
// Author: Your Name
// Date:

// Constants
myTransport = ["Mazda Mazda 3", "bike", "rides  from friends", "Lime scooter"]; 
// Functions
myMainRide = {
  make: "Mazda",   
  model: "Mazda 3", 
  color: "Blue", 
  year: 2015, 
  age: function() {
    return 2024 - this.year;
  }
}

document.writeln("Kinds of transportation I use: ", myTransport, "</br>");
document.writeln("My Main Ride: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre>");