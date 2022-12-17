const onSubmit = (event) => {
    event.preventDefault();
    const URL =
        'https://todo-app-3760.herokuapp.com' || 'http://localhost:3001';
    const data = new FormData(event.target);
    let todoContent = data.get('todoContent');
    let category = data.get('category');
    let description = data.get('description');
    console.log(data);
    console.log(todoContent);
    // const JSONData = Object.fromEntries(data.entries());
    //document.querySelector('.output').innerHTML = content;
    fetch(`${URL}/`, {
        method: 'POST',
        body: JSON.stringify({
            todoContent: todoContent,
            done: false,
            category: category,
            todoDescription: description
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((response) => response.json())
        .then((data) => {
            let { todoContent, category, todoDescription } = data;
            todoContent = todoContent;
            category = category;
            todoDescription = description;
            console.log(data.todoDescription);
        })
        .catch((e) => console.log(e.message, ' but whhyyyy'));
    setTimeout(() => window.location.reload(), 300);
};

document.querySelector('form').addEventListener('submit', onSubmit);
