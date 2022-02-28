// alert("ही गीक्स");

var Educator = "I teach";

var new_obj = {
    'first_name': "Aayush",
    'middle_name': "",
    'last_name': "Sinha",
    'role': Educator,
    'subjects': {
        'web': "React and JS"
    },
};

// console.log(new_obj);
// alert(new_obj); //First
// var a = new_obj.toString(); //Under the hood, this will happen!
// alert(a); //Second

// document.write(new_obj);

// document.write(new_obj.first_name + " ");
// document.write(new_obj);


function print2() {
    // document.write("2");
    alert("2");
}

function fn4() {
    console.log("Some key has been pressed");
}

function fn3() {
    console.log("Anchor clicked");
}

function fn1() {
    console.log('hi geeks');
    // alert("Clicked");
}

function fn2() {
    console.log('have patience');
}

























let x={},
y={name:"rony"};
z={name:"john"};

x[y]={name:"vivke"};

/*

x = {
    "[object Object]": {
        name: "vivke",
    }
}

*/

x[z]={name:"akki"};

/*

x = {
    "[object Object]": {
        name: "akki",
    }
}

*/

console.log(x[y]);

// console.log(x);