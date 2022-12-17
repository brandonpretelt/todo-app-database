const id = window.location.search.split('=');

const getTodo = async (id) => {
    const URL =
        'https://todo-app-3760.herokuapp.com' || 'http://localhost:3001';
    const getTodo = await fetch(`${URL}/${id}`);
    const getTodoData = await getTodo.json();
    console.log(getTodoData);
    const todoTitle = document.querySelector('.todo-title');
    todoTitle.textContent = getTodoData.todoContent;
};

const grabId = async (id) => {
    const URL =
        'https://todo-app-3760.herokuapp.com' || 'http://localhost:3001';
    const getTodo = await fetch(`${URL}/${id}`);
    const getTodoData = await getTodo.json();
    console.log(getTodoData._id);
    return getTodoData._id;
};

document.querySelector('button').addEventListener('click', () => grabId(id[1]));

const renderCategories = async (id) => {
    const URL =
        'https://todo-app-3760.herokuapp.com' || 'http://localhost:3001';
    const getTodo = await fetch(`${URL}/${id}`);
    const getTodoData = await getTodo.json();
    const categories = getTodoData.category.join(',').split(',');
    console.log(categories);
    categories.forEach((item) => {
        const todoCategory = document.querySelector('.todo-category');
        if (item === '') {
            return;
        } else if (item !== '')
            todoCategory.innerHTML += `<div class="category-item"> ${item}</div>`;
    });
};

const deleteItem = async (id) => {
    const URL = 'https://todo-app-3760.herokuapp.com';
    await fetch(`${URL}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        })
        .catch((e) => console.log(e.message, ' but whhyyyy'));
    setTimeout(() => (window.location = '/'), 250);
};

getTodo(id[1]);
renderCategories(id[1]);
document
    .querySelector('.delete')
    .addEventListener('click', () => deleteItem(id[1]));
