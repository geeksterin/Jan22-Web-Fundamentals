const API_KEY = "a08c1dc5";

const convert_fn = function(res) {
    return res.json();
}

const handle_popup = function (data) {
    console.log(data);
}

const showPopup = function(e) {
    const movie_id = e.target.id;
    fetch(`http://www.omdbapi.com/?i=${movie_id}&plot=full&apikey=${API_KEY}`).then(convert_fn).then(handle_popup);
}

const show_data = function(original_data) {
    const search_data = original_data.Search;
    const parent_elem = document.getElementById('container');
    parent_elem.innerHTML = "";
    
    for (let i = 0; i < search_data.length; i += 1) {
        const single_data = search_data[i];

        const div_elem = document.createElement('div');
        const img_elem = document.createElement('img');
        const h2_elem  = document.createElement('h2');
        const p_elem   = document.createElement('p');
        const btn_elem = document.createElement('button');

        p_elem.innerText = single_data.Year;
        h2_elem.innerText = single_data.Title;
        img_elem.src = single_data.Poster;
        btn_elem.innerText = "Read More";

        div_elem.classList.add('flex-item');
        btn_elem.id = single_data.imdbID;
        btn_elem.addEventListener('click', showPopup);

        div_elem.appendChild(img_elem);
        div_elem.appendChild(h2_elem);
        div_elem.appendChild(p_elem);
        div_elem.appendChild(btn_elem);
        parent_elem.appendChild(div_elem);
    }
}




const btn = document.getElementById('search_input_btn');
const ip = document.getElementById('search_input');

const search_fn = function(e) {
    if(e.key == "Enter") {
        fetch(`http://www.omdbapi.com/?s=${e.target.value}&apikey=${API_KEY}`).then(convert_fn).then(show_data);
    }
}


const btn_search = function(e) {
    const ip = document.getElementById('search_input');
    fetch(`http://www.omdbapi.com/?s=${ip.value}&apikey=${API_KEY}`).then(convert_fn).then(show_data);
}

btn.addEventListener('click', btn_search);
ip.addEventListener('keyup', search_fn);
