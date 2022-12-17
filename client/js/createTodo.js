const onSubmit = (event) => {
    event.preventDefault();
    const URL =
        'https://todo-app-3760.herokuapp.com' || 'http://localhost:3001';
    const data = new FormData(event.target);
    let todoContent = data.get('todoContent');
    let category = data.get('category');
    let descrtiption = data.get('description');
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
            todoDescrtiption: descrtiption
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((response) => response.json())
        .then((data) => {
            data.todoContent = todoContent;
            data.category = category;
            data.todoDescrtiption = description;
        })
        .catch((e) => console.log(e.message, ' but whhyyyy'));
    setTimeout(() => window.location.reload(), 300);
};

document.querySelector('form').addEventListener('submit', onSubmit);
