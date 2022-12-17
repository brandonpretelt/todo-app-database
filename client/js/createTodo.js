const onSubmit = (event) => {
    event.preventDefault();
    const URL = 'http://localhost:3001';
    const data = new FormData(event.target);
    let todoContent = data.get('todoContent');
    let category = data.get('category');
    let todoDescription = data.get('todoDescription');

    console.log(data);
    fetch(`${URL}/`, {
        method: 'POST',
        body: JSON.stringify({
            todoContent: todoContent,
            done: false,
            category: category,
            todoDescription: todoDescription
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((response) => response.json())
        .then((data) => {
            data.todoContent = todoContent;
            data.category = category;
            data.todoDescription = todoDescription;
            console.log(data);
        })
        .catch((e) => console.log(e.message, ' but whhyyyy'));
    // setTimeout(() => window.location.reload(), 300);
};

document.querySelector('form').addEventListener('submit', onSubmit);
