let listElement = document.querySelector('#app ul');
let inputElement = document.querySelector('#app input');
let buttonElement = document.querySelector('#app button');


let todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos() {
    listElement.innerHTML = '';

    for(todo of todos) {
        let todoElement = document.createElement('li');
        let todoText = document.createTextNode(todo);

        let linkELement = document.createElement('a');

        linkELement.setAttribute('href', '#');

        let pos = todos.indexOf(todo);
        linkELement.setAttribute('onclick', 'deleteTodo(' + pos + ')');

        let linkText = document.createTextNode('Excluir');

        linkELement.appendChild(linkText);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkELement);
        listElement.appendChild(todoElement);
    }
}

renderTodos();

buttonElement.onclick = function addTodo() {
    let todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
    saveToStorage();
}

function deleteTodo(pos) {
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos));
}