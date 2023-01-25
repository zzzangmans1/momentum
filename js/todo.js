const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

function handleToDoSubmit(evnet){
    evnet.preventDefault();
    const newValue = toDoInput.value
    toDoList.innerText = newValue;
    toDoInput.value = "";
}

toDoForm.addEventListener("submit", handleToDoSubmit);