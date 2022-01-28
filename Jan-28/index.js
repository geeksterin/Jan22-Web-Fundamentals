console.log("Hello geeks");

//Print number from 1 to 10.
/*
var n = 1;
while (n <= 10) {
    console.log(n);
    n = n + 1;
}

console.log("Program execution finished");
*/

//Print the first 15 even numbers.
//2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30
/*
var n = 2;

while(n <= 30) {
  console.log(n);
  n = n + 2;
}

console.log("Program execution finished");
*/

// Print the first n odd numbers.
// n will be input from the user.
// n = 7
// 1, 3, 5, 7, 9, 11, 13
// n = 4
// 1, 3, 5, 7
/*
var i = prompt("Enter the number");
i = parseInt(i);
var counter = 0;
while(counter < i) {
    console.log( (2 * counter) + 1 );
    counter = counter + 1;
}

console.log("Program execution finished");
*/

var s = "Hello Geeks";
//Split into array of words.
var a = s.split(" ");
console.log(a);

s = "1,2,3,4,5,6";
var a = s.split(",");
console.log(a);

s = "abcdefcghicjksdfesgsdgdlcmno";
var a = s.split("c");
console.log(a);


var a = ["1234", "abcd", "something", "something else"];
a[1] = a[1] + " again";
//var s = a.join(".");
//console.log(s);
//console.log(typeof s);
console.log(a);






