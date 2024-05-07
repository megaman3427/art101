function isEven(x){
   return (x % 2 == 0);
}

console.log("Is 1 even? ", isEven(1));
console.log("Is 2 even? ", isEven(2));

myArray = [100, 81, 4, 16, 42, 144, 10000]
console.log("My array", myArray);

var result = myArray.map(isEven);
console.log("Test of evenness of array:", result);

var result = myArray.map(function(x){
  return x ** 0.5;
})

console.log("Sqaureroot of array:", result);

var mapResults = "myArray: [100, 81, 4, 16, 42, 144, 10000] | Evenness of array: [true,false,true,true,true,true,true] | Squareroots of array: [10,9,2,4,6.48074069840786,12,100]";
$("#output").html(mapResults);
