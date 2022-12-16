const onSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    let todoContent = data.get('todoContent');
    let category = data.get('category');
    const done = false;

    // const JSONData = Object.fromEntries(data.entries());
    //document.querySelector('.output').innerHTML = content;
    fetch('/todos/add', {
        method: 'POST',
        body: JSON.stringify({
            todoContent: todoContent,
            done,
            category: category
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((response) => response.json())
        .then((data) => {
            data.newTodo.todoContent = todoContent;
            data.newTodo.category = category;
            console.log(data.newTodo);
        })
        .catch((e) => console.log(e.message, ' but whhyyyy'));
};

document.querySelector('form').addEventListener('submit', onSubmit);
