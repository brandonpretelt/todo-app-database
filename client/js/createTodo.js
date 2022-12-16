const { default: mongoose } = require('mongoose');

const onSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    let todoContent = data.get('todoContent');
    let category = data.get('category');
    let id;

    console.log(todoContent);
    // const JSONData = Object.fromEntries(data.entries());
    //document.querySelector('.output').innerHTML = content;
    fetch('/todos/add', {
        method: 'POST',
        body: JSON.stringify({
            todoContent: todoContent,
            done: false,
            category: category
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((response) => response.json())
        .then((data) => {
            data.newTodo.id = ++id;
            data.newTodo.todoContent = todoContent;
            data.newTodo.category = category;
            console.log(data);
        })
        .catch((e) => console.log(e.message, ' but whhyyyy'));
    window.location = `/single.html?id=${data.id}`;
};

document.querySelector('form').addEventListener('submit', onSubmit);
