console.log("It's working");
/*
//var arr = [];
//arr[0] = "Aayush";
//arr[999] = "Sinha";

//console.log(arr);

//var arr2 = ["Element 1", "Element 2", "Element 3", "Element 4", "Element 5"];
//console.log(arr2);

//var arr = [];
//arr[1.4] = "Something";
//arr["abcd"] = "Something";
//arr[0] = "Valid";
//arr[6-3+7-8] = "Something";

//var key = 0;
//arr[key] = "Something";

//console.log(arr);
//console.log(arr["abcd"]);

var value = "Aayush"

var obj = {
    "first_name": value,
    "last_name": "Sinha",
    "a": "fjdkjjdgjh",
    "g": 12333,
    "z": undefined,
    1: "Something",
};

console.log(obj);
console.log(obj.first_name);
console.log(obj["first_name"]);

obj.last_name = undefined;

console.log(obj.last_name);
console.log(obj["last_name"]);



console.log("Below");

var k = "first_name";
console.log(obj.k); //This is wrong because the JS engine will try to find the element with the key as "k".

console.log(obj[k]); //This is where the JS engine will see that k is a variable and get the value, i/e first_name and then find the element with the key of first_name.

*/

var a = "Aayush";

console.log("a");
console.log(a);

var obj = {};

var obj = {
    "first_name": "Aayush",
    "last_name": "Sinha",
    "email": "aayush.aryan@me.com",
    "website": "sdfhsdhfjds",
    "k": "This is Key K's value",
};
console.log(obj);

var k = "first_name";

console.log(obj.k);
//console.log(obj."k"); //Not valid syntax
console.log(obj["k"]);
console.log(obj[k]); //obj["first_name"]
console.log(k);

//Created a new element inside obj with the key as students and the value as empty array.
obj.students = [];
obj.students.push("Akshay");
obj.students.push("Abhay");
console.log(obj);
console.log(obj.students[1]);

obj.new_key = "New Value";
console.log(obj);

delete obj.new_key;
console.log(obj);

//In object, we can get all the keys separately and all the values separately.
console.log(   Object.keys(obj)   );
console.log(   Object.values(obj) );


obj.experience = {};
obj.experience.years = 7;

console.log(obj);



//Loop on OBJ

var keys = Object.keys(obj);
for(var i = 0; i < keys.length; i = i + 1) {
    var single_key = keys[i];
    console.log(obj[single_key]);
}


var obj = {
    "first_name": "Aayush",
    "last_name": "Sinha",
    "email": "aayush.aryan@me.com",
    "website": "sdfhsdhfjds",
    "k": "This is Key K's value",
    "students": [
	{
	    "name": "Name 1",
	    "marks": 15
	},
	{
	    "name": "Name 2",
	    "marks": 17
	},
	{
	    "name": "Name 3",
	    "marks": 19
	},
	{
	    "name": "Name 4",
	    "marks": 21
	},
	{
	    "name": "Name 5",
	    "marks": 0
	},
        {
	    "name": "Name 6",
	    "marks": 27
	},
    ],
};




