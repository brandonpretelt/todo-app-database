/* const getTodos = async () => {
    
}; */
//const getTodoBtn = document.querySelector('[data-btn="get-todos"]');
//if (getTodoBtn) {

document.addEventListener('click', (e) => {
    const todosLi = document.querySelector('.todos > li');

    if (e.target.id === 'edit') {
        todosLi.setAttribute('contenteditable', true);
    }
});

/* document.addEventListener('click', (e) => {
    if (e.target.nodeName === 'LI') {
        getSingleTodo();
    }
}); */

async function getSingleTodo(id) {
    console.log(id);
    //  const response = await fetch(URL);
    //const data = await response.json();
    //console.log(data);
}

const editForm = document.getElementById('edit-form');
if (editForm) {
    editForm.addEventListener('submit', (e) => {
        e.preventDefault();
    });
}

async function getTodoId() {
    const res = await fetch('/todos');
    const data = await res.json();
    data.forEach((item) => {
        console.log(item);
    });
}

document.addEventListener('DOMContentLoaded', async () => {
    const todosList = document.querySelector('.todos');
    const todosContainer = document.querySelector('.todos-container');
    const response = await fetch('http://localhost:3001/');
    const data = await response.json();

    data.forEach((item) => {
        todosList.innerHTML += `
        <li data-get-todo>
        <div>
            <a href="single.html?id=${item._id}">
                ${item.todoContent}
            </a>
           
        </div>
        </li>`;
    });
});
//}

/* 

   headers: {
      'Content-Type': 'application/json',
    }
     */
