console.log("This is array");

//var arr2 = new Array();
//console.log(arr2);

var num = -88;
var arr1 = [1234, num, false, null, ["Child array element Geeks"]];
console.log(arr1);
//console.log(typeof arr1);
//console.log(typeof arr1[2]);
console.log(arr1[4][0]); //Multi dimensional array


console.log(arr1[2]);
arr1[2] = "New updated value";
console.log(arr1[2]);

//Push -> When we want to add a new element to the array and we don't know the index.

arr1.push("Inserted last element");
console.log(arr1);
//arr1[10] = "Last Element";


var arr3 = [
    "Element 1",
    "Element 2",
    "Element 3",
    [
	"Element 4.1", 
	"Element 4.2"
    ],
    "Element 5",
];

console.log(arr3);

arr3[3].push("Element 4.3");

console.log(arr3);








