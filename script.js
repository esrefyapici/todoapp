const form = document.querySelector('.add-task-input');
const input = document.querySelector('#add-task-name');
const list = document.querySelector('.task-list');
const deleteAll = document.querySelector('.deleteAll')

form.addEventListener('submit', submit);

function submit(e){
    e.preventDefault();
    if(input.value !== ''){
    const newitem = document.createElement("li");
    newitem.textContent = input.value ;
    newitem.classList.add("task-list-item");
    const icon = document.createElement("i");
    icon.classList.add("fa-solid", "fa-square-minus");
    newitem.appendChild(icon);
    list.appendChild(newitem);
    input.value = "";
    }else(
        alert('please type something')
    )
}


list.addEventListener('click', deleteItem);
function deleteItem(e){
    if(e.target.className === "fa-solid fa-square-minus"){
        e.target.parentElement.remove();
    }
}


deleteAll.addEventListener('click', remove);
function remove(e){
    if(e.target.className === "deleteAll"){
        list.innerHTML = "";
    }
}
