

{
    // function sum(a, b) {
    //     return a + b;
    // }

    // const sum = function (a, b) {
    //     return a + b;
    // }

    // console.log(sum(2, 5));
    // console.log(sum);
    // console.log(typeof sum);

    // const obj = {
    //     'first_number': 10,
    //     'second_number': 20,
    //     'sum': function(a, b) {
    //         return a + b;
    //     }
    // };

    // console.log(obj.sum(10, 5));

    // const arr = [
    //     function() {
    //         console.log('Hello');
    //     }
    // ];

    // arr[0]();

    // const a = function() {
    //     console.log("ABCD");
    // };

    const calculator = {
        'num1': 0,
        'num2': 0,
        'sum' : function() {
            return calculator.num1 + calculator.num2;
        },
        'diff': function() {
            return calculator.num1 - calculator.num2;
        },
    };

    // alert(a);
    // calculator[a] = "Value1";
    // console.log(calculator);

    calculator.num1 = 10;
    calculator.num2 = 13;
    console.log(calculator.sum());
    console.log(calculator.diff());


    // const arr = [
    //     10,
    //     'string',
    //     function() {
    //         console.log("Hello World");
    //     }
    // ];

    // console.log(arr);
    // arr[2]();

    // const arr=[
    //     10,
    //     'string',
    //     function() {
    //         console.log("Hello world");
    //     }
    // ];
    
    // console.log(arr);
    // arr[2]();


    // const arr1 = [
    //     function() {
    //         document.body.style.backgroundColor = "red";
    //     }
    // ];

    // arr1[0]();

    //Callback
    
    // const fn = function(param) {
    //     console.log(param);
    //     console.log(typeof param);
        
        
    //     if(typeof param == "function") {
    //         param();
    //     }
    // }

    // const argument = function() {
    //     console.log("Hello World");
    // }

    // fn(argument);

    

    // const cooking = function(cb) {
    //     console.log("Food preparing");
    //     console.log("Food ready");
    //     // cb();
    // }

    // const wake_me_up = function() {
    //     console.log("Wake up");
    // }

    // const alert_me = function() {
    //     alert("Stop movie, come for dinner");
    // }


    // cooking(alert_me);

}




const btn = document.getElementById('main_btn');

const JS_TEXT = "JS Functions";
const CB_TEXT = "Callback Functions";

const fn = function() {
    const text = document.getElementById('main_txt');
    
    if(text.innerText == JS_TEXT) {
        text.innerText = CB_TEXT;
    } else {
        text.innerText = JS_TEXT;
    }
}

btn.addEventListener("click", fn);