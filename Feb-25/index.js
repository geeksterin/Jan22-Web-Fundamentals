// alert("1234");
// document.write("Document Write");
// console.log("It will write in console");



// function check_odd_or_even(num1) {
//     var divide_by = 2;
//     if(num1 % divide_by == 0) {
//         document.write("Even number");
//     } else {
//         document.write("Odd number");
//     }
// }

// check_odd_or_even(8);


// function square1(n){
//     document.write(n*n)
// }

// square1(9)

// function square(n){
//     var square=n*n;
//     document.write(square)
//  }
 
//  square(4);
 

// function checkOddEven(n) {
//     var sqr = n ** 2;
//     document.write(sqr);
// }
// checkOddEven(4);

// function square(n){
//     var square = n*n
//     document.write(square)
//  }
 
//  square(5);

// function square(n) {
//     var n = n * n
//     document.write(n)
// }

// square(2);


// function square(n) {
//     document.write(n*n);
// }
// square(12);







// function sqaure_of_number(num) {
//     var sqr = num * num;
//     return sqr;
// }

// var input = prompt("Enter the number");
// input = parseInt(input);
// var output = sqaure_of_number(input);
// document.write(output);

// var input = prompt("Enter the number2");
// input = parseInt(input);
// var output = sqaure_of_number(input);
// console.log(output);

function add(a, b) {
    var sum = a + b;
    return sum;
}


var num1 = prompt("Enter first number");
var num2 = prompt("Enter second number");
num1 = parseInt(num1);
num2 = parseInt(num2);

var s = add(num1, num2);
document.write(s);