// alert("HI");

//This function will be called whenever the button is clicked.
//This is because in HTML, I have written onclick.
function updateNew() {
    //Get reference of the input.
    var input_field = document.getElementById('ip_text');
    
    //Get the actual value (whatever user has entered).
    var new_text_value = input_field.value;
    
    //Get the reference of the output H1.
    var output_field = document.getElementById("op_text");
    
    //Update the innerText with the value we have.
    output_field.innerText = new_text_value;
}