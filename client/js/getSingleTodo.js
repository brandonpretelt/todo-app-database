const id = window.location.search.split('=');
let lsCategories = [];
const getTodo = async (id) => {
    const URL =
        'https://todo-app-3760.herokuapp.com' || 'http://localhost:3001';
    const getTodo = await fetch(`${URL}/${id}`);
    const getTodoData = await getTodo.json();
    console.log(getTodoData);
    console.log(getTodoData.category);
    const todoTitle = document.querySelector('.todo-title');
    const todoDescription = document.querySelector('.description');
    todoTitle.textContent = getTodoData.todoContent;
    todoDescription.textContent = getTodoData.todoDescription;
};

/* const grabId = async (id) => {
    const URL =
        'https://todo-app-3760.herokuapp.com' || 'http://localhost:3001';
    const getTodo = await fetch(`${URL}/${id}`);
    const getTodoData = await getTodo.json();

    return getTodoData._id;
}; */

// document.querySelector('button').addEventListener('click', () => grabId(id[1]));

const renderCategories = async (id) => {
    const URL =
        'https://todo-app-3760.herokuapp.com' || 'http://localhost:3001';
    const getTodo = await fetch(`${URL}/${id}`);
    const getTodoData = await getTodo.json();
    const categories = getTodoData.category.join(',').split(',');
    console.log(id);
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
    let server = 'https://todo-app-3760.herokuapp.com';
    let localhost = 'http://localhost:3001';
    const URL = localhost;

    await fetch(`${URL}/${id}`, {
        method: 'DELETE'
    })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((e) => console.log(e.message, ' but whhyyyy'));
    //setTimeout(() => (window.location = '/client/'));
    alert('Successfully deleted!');
    window.location = '/client/';
};

getTodo(id[1]);
renderCategories(id[1]);
document.querySelector('.delete').addEventListener('click', () => {
    console.log(id[1]);
    deleteItem(id[1]);
});
