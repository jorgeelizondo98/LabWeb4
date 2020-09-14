let post = document.getElementById("buttonPost");
let clear = document.getElementById("buttonClear");
let mark = document.getElementById("buttonMark");
let del = document.getElementById("buttonDelete");
let todoList = document.getElementById("todoList");


post.addEventListener("click",TodoPost);
clear.addEventListener("click",TodoClear);
mark.addEventListener("click",TodoMark);
del.addEventListener("click",TodoDel);

function TodoPost(e) {
    e.preventDefault();

    var todo = document.getElementById("todoText").value;
    var list = document.getElementById("todoList");

    let currentList = list.innerHTML;
    list.innerHTML = currentList + `<input type = "checkbox" name="todo" /> ${todo} <br> `

}

function TodoClear(e) {
    e.preventDefault();
    let items = document.getElementsByName("todo");
    for(i = 0; i < items.length; i++){
        items[i].checked = false;
    }

}

function TodoMark(e) {
    e.preventDefault();
    let items = document.getElementsByName("todo");
    for(i = 0; i < items.length; i++){
        items[i].checked = true;
    }
}

function TodoDel(e) {
    e.preventDefault();
    document.getElementById("todoList").innerHTML = "";
}