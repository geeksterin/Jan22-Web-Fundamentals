console.log("Let's looooop");


//Print upto n. Atleast print 1.
/*
var n = 10;
var count = 1;
do {
    console.log(count);
    count = count + 1;
} while(count <= n);
*/

//Check whether character is a vowel or not.
var character = "i";

/*
switch(character) {
    case 'a':
    case 'A':
        console.log("Vovel entered A");
        break;
    case 'e':
        console.log("Vowel entered E");
        break;
    case 'i':
    case 'I':
        console.log("Voewl entered I");
        break;
    default:
        console.log("It is a consonant");
}

*/

var n = prompt("Enter the number");
n = parseInt(n);

if(isNaN(n)) {
    alert("Please enter valid number");
} else {
    var main_string = "";
    for(var i = 0; i < n; i = i + 1) {
	var inner_string = "";
        for(var j  = 0; j < n; j = j + 1) {
	    inner_string = inner_string + "*";
	}
	main_string = main_string + inner_string + "\n";
    }

    console.log(main_string);
}



///Inner


