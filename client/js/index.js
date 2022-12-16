/* const getTodos = async () => {
    
}; */

const onSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(data);
    const value = Object.fromEntries(data.entries());
    console.log(value);
    /* fetch('localhost:3001/todos/add', {
        method: 'POST',
        body: JSON.stringify({ todoContent }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((e) => console.log(e.message, ' but whhyyyy')); */
};

if (document.querySelector('form')) {
    document.querySelector('form').addEventListener('submit', () => {
        onSubmit;
    });
}

const getTodoBtn = document.querySelector('[data-btn="get-todos"]');
if (getTodoBtn) {
    getTodoBtn.addEventListener('click', async () => {
        const todosList = document.querySelector('.todos');
        const response = await fetch('/todos');
        const data = await response.json();
        console.log(data.todos);
        data.todos.forEach((item) => {
            todosList.innerHTML += `<li>${item.todoContent}</li>`;
        });
    });
}

/* 

   headers: {
      'Content-Type': 'application/json',
    }
 */
