let todos = [];

//This will loop on the todos array and make the list.
const render = function() {
    const parent_container = document.getElementById('list_container');
    parent_container.innerHTML = "";

    for(let i = 0; i < todos.length; i += 1) {
        
        const new_li = document.createElement('li');
        const new_span = document.createElement('span');
        const new_btn = document.createElement('button');
        new_btn.innerText = "Delete me";

        new_span.innerText = todos[i];
        new_li.appendChild(new_span);
        new_li.appendChild(new_btn);
        parent_container.appendChild(new_li);
    }
}

//This will add a new item to the array.
//After adding, it will call render function.
const add_item = function() {
    const ip = document.getElementById('todo_input');
    const new_todo = ip.value;
    todos.push(new_todo);

    ip.value = "";
    
    render();
}

const delete_item = function(index) {
    let new_arr = [];
    for(let i = 0; i < todos.length; i += 1) {
        if(i != index) {
            new_arr.push(todos[i]);
        }
    }
    todos = new_arr;
    render();
}


const btn = document.getElementById('add_btn');
btn.addEventListener('click', add_item);