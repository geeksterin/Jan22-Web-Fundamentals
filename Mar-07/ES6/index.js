// var my_name = "Aayush";
// my_name = "Chetan";
// console.log(my_name);


// //const -> Constant
// const name_again = "Aayush";
// name_again = "Dev";
// console.log(name_again);

// var my_name = "Aayush";
// const my_name = "Aayush";

// function show_name() {
//     var op_element = document.getElementById('name_op');
//     op_element.innerText = my_name;
// }

// if(my_name == "Aayush") {
//     alert("Correct name");
//     //Can be 1 or 1000.
// } else {
//     alert("Incorrect Name");
// }

// {
//     console.log("Hello");
// }

function show_name() {
    // {
    //     const my_name = "Aayush";
    // }
    let my_name = "Aayush";
    my_name = "Changed";   
    const op_element = document.getElementById('name_op');
    op_element.innerText = my_name;

    const container_div = document.getElementById('container');
    // console.log(container_div);
    container_div.style.backgroundColor = "red";
    container_div.style.fontFamily = "cursive";
    container_div.style.boxShadow = "2px 2px 3px black";
    container_div.style.display = "block";
    // container_div.style.backgroundImage = "url()";
    console.log(container_div.classList);
    container_div.classList.replace("class2", "class3");
}

// {
//     let my_name = "Aayush";
// }
// console.log(my_name);


// var name = "Chetan";

// console.log(name);

// onclick="fn('home')"


// function fn(div_id) {
//     if(div_id == 'home') {

//     } else if() {

//     }

//     switch(div_id) {
//         case 'home':
//             //some logic
//             break;
//         case 'profile':
//     }
//     document.getElementById('').classList.add();
// }


function my_img_fn() {
    document.getElementById('some_text').style.display = "none";
    alert("image clicked");
}

