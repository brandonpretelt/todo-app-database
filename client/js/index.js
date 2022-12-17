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
    const URL =
        'https://todo-app-3760.herokuapp.com' || 'http://localhost:3001/';
    const todosList = document.querySelector('.todos');
    const todosContainer = document.querySelector('.todos-container');
    const response = await fetch(URL);
    const data = await response.json();
    if (data.length == 0) {
        todosContainer.innerHTML = `<h3> 
                No todos...  
            </h3>
            <svg width="120px" height="120px" viewBox="0 0 120 120" id="emoji" xmlns="http://www.w3.org/2000/svg"><g id="color"><path fill="#FCEA2B" d="M60.334 22.194c-20.953 0 -37.999 17.046 -37.999 37.999c0 20.953 17.046 37.999 37.999 37.999C81.287 98.193 98.333 81.146 98.333 60.193C98.333 39.24 81.287 22.194 60.334 22.194z"/><path fill="#92D3F5" d="M37.958 56.374c-1.795 1.837 -5.192 5.813 -5.488 9.861c-0.186 2.535 1.864 4.905 4.394 5.089c2.615 0.191 4.898 -1.78 5.091 -4.394l0 0C42.25 62.881 39.466 58.454 37.958 56.374z"/></g><g id="hair"/><g id="skin"/><g id="skin-shadow"/><g id="line"><path cx="36" cy="36" r="23" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="3.3333333333333335" d="M98.333 60A38.333 38.333 0 0 1 60 98.333A38.333 38.333 0 0 1 21.667 60A38.333 38.333 0 0 1 98.333 60z"/><path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3.3333333333333335" d="M44.166 80c3.127 -6.387 9.706 -10.327 16.666 -10c6.391 0.301 12.155 4.154 15 10"/><path fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="3.3333333333333335" d="M33.979 69.384c-0.888 -0.888 -1.377 -2.067 -1.376 -3.323c0 -4.132 3.906 -8.085 4.071 -8.25c0.345 -0.345 0.906 -0.345 1.251 0c0.166 0.166 4.073 4.12 4.073 8.252l0 0c-0.001 2.589 -2.109 4.696 -4.699 4.696C36.046 70.759 34.866 70.271 33.979 69.384z"/><path d="M50 51.667c0 2.761 -2.242 5 -5 5c-2.759 0 -5 -2.239 -5 -5c0 -2.759 2.242 -5 5 -5C47.759 46.666 50 48.908 50 51.667"/><path d="M80 51.667c0 2.761 -2.242 5 -5 5s-5 -2.239 -5 -5c0 -2.759 2.242 -5 5 -5S80 48.908 80 51.667"/></g></svg>`;
    } else {
        data.forEach((item) => {
            todosList.innerHTML += `
            <li data-get-todo>
                <div>
                    <a href="todo.html?id=${item._id}">
                        ${item.todoContent}
                    </a>
                </div>
            </li>`;
        });
    }
});
//}

/* 

   headers: {
      'Content-Type': 'application/json',
    }
     */
