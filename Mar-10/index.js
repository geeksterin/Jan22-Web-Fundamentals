// //Synchronous Programming Language
// console.log("Hello");
// console.log("Geeks");
// document.write("Hello geeks <br />");

// // for(let i = 0; i < 1000000000000; i += 1) {

// // }

// console.log("Something entered");
// document.write("Hello geeks again");

// const callback_fn = function() {
//     document.write("After 5 seconds");
// }

// setTimeout(callback_fn, 5000);

// console.log("Somethin after timeout");

// console.log("0");

// const another_fn = function() {
//     console.log("A");
//     // alert("Something");
// }

// setTimeout(another_fn, 5000);

// // console.log("A");
// console.log("B");


// const hide_ad = function() {
//     const p_elem = document.getElementById('ad');
//     p_elem.style.display = "none";
// }

// setTimeout(hide_ad, 5000);

//Use a variable to tell WHEN to increment and WHEN to decrement.
// let increment = true;
// let counter = 0;
// const fn = function() {
//     const timer_elem = document.getElementById('timer');
//     timer_elem.innerText = `${counter} seconds`;
//     if(increment) {
//         counter += 1;
//         if(counter >= 5) {
//             increment = false;
//         }
//     } else {
//         counter -= 1;
//         if(counter <= 0) {
//             increment = true;
//         }
//     }
// }

// setInterval(fn, 1000);
// setTimeout(fn, 2000);


//Timer app.
let a = 0;
const simple_fn = function() {
    const timer_element = document.getElementById('timer');
    timer_element.innerText = `${a} seconds`;
    console.log("sdkjhjksdf");
    a += 1;
    if(a > 10) {
        clearInterval(interval_id);
    }
}

const interval_id = setInterval(simple_fn, 1000);
// const another_id = setTimeout(simple_fn, 1000);
// console.log(interval_id);
const stop = function() {
    //Something here.
    clearInterval(interval_id);
    // clearTimeout(another_id);
}

const stop_btn = document.getElementById('stop');
stop_btn.addEventListener('click', stop);