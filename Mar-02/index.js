// alert("Hi");

// var op = document.getElementById('counter');
// var op = document.getElementsByTagName('h1');
// var op = document.getElementsByClassName('abcd');
// var op = document.querySelector(".container > button:first-child");
// var op = document.querySelectorAll('script');
// console.log(op);

var counter = 0;

function like() {
    counter += 1; // counter = counter + 1;
    render();
}

function dislike() {
    counter -= 1; // counter = counter - 1;
    render();
}

function render() {
    var disp = document.getElementById('op_text');
    disp.innerText = counter;
}