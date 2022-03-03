//Changing the color using class.

// function color_changer() {
//     //When I invoke this function, change the class from light to dark.
//     var body = document.body;
//     console.log(body.classList);
//     //Once I have the classlist.
//     //I need to remove light.
//     // body.classList.remove("light");
//     //I need to add dark.
//     // body.classList.add("dark");

//     // body.classList.replace("light", "dark");
//     var a = body.classList.contains("light");
//     console.log(a);
// }


function color_changer() {
    var body = document.body;
    if(body.classList.contains("light")) {
        body.classList.remove("light");
        body.classList.add("dark");
        // body.classList.replace("light", "dark");
    } else {
        body.classList.remove("dark");
        body.classList.add("light");
        // body.classList.replace("dark", "light");
    }
}

function color_changer() {
    var body = document.body;
    if(body.classList.contains("light")){
        body.classList.remove("light");
        body.classList.add("dark")
    } else{
        body.classList.remove("dark");
        body.classList.add("light");
    }
}

function hidePopup() {
    // var unsub = document.getElementById('unsubscribe');
    var unsub = document.getElementsByClassName('popup')[0];
    unsub.classList.add("d-none");
}