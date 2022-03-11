console.log("Hi");

const convert_to_json = function(response) {
    return response.json();
}

const handle_data = function(res) {
    const user_arr = res.data;
    const container = document.getElementById('list_container');
    for(let i = 0; i < user_arr.length; i += 1) {
        const single_user = user_arr[i];

        const new_li_elem = document.createElement('li');
        new_li_elem.innerText = single_user.email;
        container.appendChild(new_li_elem);
    }
}

fetch("https://reqres.in/api/users?page=1").then(convert_to_json)
.then(handle_data);

const handle_search = function(search_response) {
    const image_elem = document.getElementById('search_img');
    image_elem.src = search_response.data.avatar;
}

const search_fn = function() {
    //This will fetch and search.
    const input = document.getElementById('input_field');
    const user_id = input.value;
    fetch(`https://reqres.in/api/users/${user_id}`)
    .then(convert_to_json)
    .then(handle_search);
}

const btn = document.getElementById('search_btn');
btn.addEventListener('click', search_fn);