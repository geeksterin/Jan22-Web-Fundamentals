const todos = [];
const render = function () {
    const parent_conatiner = document.getElementById('list_container');
    parent_conatiner.innerHTML = "";
    
    for (let i = 0; i < todos.length; i++) {
        const single_todo_item = todos[i];
        const new_li = document.createElement('li');
        new_li.innerText = single_todo_item;
        parent_conatiner.appendChild(new_li);
    }

}

const add_item = function () {
    const ip = document.getElementById('todo_input');
    const new_todo = ip.value;
    todos.push(new_todo);
    ip.value = "";
    render();
}

const btn = document.getElementById('add_btn');
btn.addEventListener('click', add_item);
