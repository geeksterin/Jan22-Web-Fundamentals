const container = document.getElementById('list_container');

const new_li = document.createElement('li');
new_li.innerText = "Item 2";

container.appendChild(new_li);


const new_item3 = document.createElement('li');
new_item3.style.color = "#00FF00";
new_item3.innerText = "Item 3";
new_item3.classList.add("class1");
new_item3.id = "item_3";
container.appendChild(new_item3);

const new_item4 = document.createElement('img');
new_item4.src = "https://static.scientificamerican.com/sciam/cache/file/7A715AD8-449D-4B5A-ABA2C5D92D9B5A21_source.png";
new_item4.style.width = "100px";
new_item4.id = "special_img";
new_item4.style.height = "100px";
new_item4.style.cursor = "pointer";
container.appendChild(new_item4);

const change_src = function() {
    const img = document.getElementById('special_img');
    img.src = "https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_960,f_auto/DCTM_Penguin_UK_DK_AL526630_wkmzns.jpg";
}

new_item4.addEventListener('click', change_src);