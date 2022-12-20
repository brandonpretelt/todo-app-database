const onSubmit = (event) => {
    event.preventDefault();
    const URL =
        'https://todo-app-3760.herokuapp.com' || 'http://localhost:3001';
    const data = new FormData(event.target);
    let todoContent = data.get('todoContent');
    let category = data.get('category');
    let todoDescription = data.get('todoDescription');
    let clientLocalhost = '/client/';
    let production = '/';
    console.log(data);
    fetch(`${URL}/`, {
        method: 'POST',
        body: JSON.stringify({
            todoContent: todoContent,
            done: false,
            category: [category],
            todoDescription: todoDescription
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((response) => response.json())
        .then((data) => {
            data.todoContent = todoContent;
            data.category = [category];
            data.todoDescription = todoDescription;
            console.log(typeof data.category);
            const saved = JSON.parse(localStorage.getItem('category'))
                ? JSON.parse(localStorage.getItem('category'))
                : [];
            let categoryArr = [...saved, data.category.join('')];
            localStorage.setItem('category', JSON.stringify(categoryArr));
        })
        .catch((e) => console.log(e.message, ' but whhyyyy'));

    // setTimeout(() => window.location.reload(), 350);
    setTimeout(() => (window.location = production), 400);
};

document.querySelector('form').addEventListener('submit', onSubmit);
