//Hello everyone
console.log("Hi there");

/*
Comment Line 1
Comment Line 2
Comment Line 3
Comment Line 4

*/
/*
console.log(1234);
console.log("1234");
console.log('1234');
console.log(true);
console.log("true");
console.log(false);
console.log(undefined);
console.log(null);
*/
/*
var a = "false";
console.log(a);

a = 20;
console.log(a);

a = undefined;
console.log(a);

a = "Something";
console.log(a);
*/
/*
var a = 105;
var b = 10;

console.log(a % b);
*/


//Check if the number is an odd number or an even number.
//When dividing by 2, if the remainder is 0, then the number is even.

/*
var n = 16;

var remainder = n % 2;
if(remainder == 0) {
  //console.log("Number is even");
  alert("Number is even");
} else {
  //console.log("Number is odd");
  alert("Number is odd");
}
*/


//console.log(10 == "10");

//console.log( 10 < 10 );

//alert("Hey geeks");

//alert("Statement 1");
//alert("Statement 2");

//var a = prompt("This is a hint");
//alert(a);
//alert(1234);

/*
Correct:
abcd
_abcd
a
b
_
thisIsAVeryLongVariableName
a1b
a_b
ab_
ab12345
ABCD
abcd
AbCd
$a


Incorrect
1ab -> We cannot start with a number
a-b -> We cannot use - in the variable name
a+b / a/b a*b -> We cannot use these special characters in the variable name.
*/

/*
var num = 10;
console.log("ABCD");
console.log(num);
console.log("Another one");
*/

//var ip = prompt("Enter something");
//console.log(typeof ip);


//console.log( 10 + 10 + 10 + 10);
//console.log( 10 + "10" + 10 + 10 );



//Take 2 inputs a and b and show the sum of both the numbers.

var n1 = prompt("Enter first number");
var n2 = prompt("Enter second number");

n1 = parseInt(n1);
n2 = parseInt(n2);

console.log(typeof n1);
console.log(typeof n2);

var sum = n1 + n2;
alert(sum);


